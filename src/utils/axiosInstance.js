import axios from "axios";

export const checkAuthTokens = () => {
  // console.log(localStorage.getItem("ROYAL-TREASUREToken"));
  let authTokens = localStorage.getItem("ROYAL-TREASUREToken") ? JSON.parse(localStorage.getItem("ROYAL-TREASUREToken")) : null;

  return authTokens;
};

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // headers: { Authorization: `Bearer ${checkAuthTokens()?.access_token}` },
});

axiosInstance.interceptors.request.use(async (req) => {
  if (checkAuthTokens()) {
    req.headers.Authorization = `Bearer ${checkAuthTokens()?.access_token}`;

  }
  req.headers.requester = req.baseURL;
  req.headers["Access-Control-Allow-Origin"] = "*";

  return req;
});

// axiosInstance.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   async (error) => {
//     const originalConfig = error.config;
//     if (error.response) {

//       if (error.response.status === 401) {
//         try {
//           const rs = await refreshToken();
//           if (rs) {
//             const { result } = rs.data;
//             localStorage.setItem("ROYAL-TREASUREToken", JSON.stringify(result));
//             axiosInstance.defaults.headers.Authorization = `Bearer ${result?.access_token}`;
//             return axiosInstance(originalConfig);
//           }
//         } catch (_error) {
//           console.log(_error)
//           // localStorage.removeItem("ROYAL-TREASUREToken");
//           window.location.href = "/login";
//           if (_error.response && _error.response.data) {
//             return Promise.reject(_error.response.data);
//           }
//           return Promise.reject(_error);
//         }
//       }
//     }
//     return Promise.reject(error);
//   }
// );

async function refreshToken() {
  if (localStorage.getItem("ROYAL-TREASUREToken")) {
    const result = await axiosInstance.post("/auth/refreshToken", {
      refreshToken: JSON.parse(localStorage.getItem("ROYAL-TREASUREToken")).refreshToken,
    });
    return result;
  } else {
    return null;
  }
}

export default axiosInstance;
