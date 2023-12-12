import React from "react";
import classNames from "classnames";
import Toggle from "../sidebar/Toggle";
import Logo from "../logo/Logo";
// import HeaderSearch from "../header-search/HeaderSearch";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import { logoutUser } from "../../store/actions";

const Header = ({ fixed, theme, className, setVisibility, ...props }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const headerClass = classNames({
    "nk-header": true,
    "nk-header-fixed": fixed,
    [`is-light`]: theme === "white",
    [`is-${theme}`]: theme !== "white" && theme !== "light",
    [`${className}`]: className,
  });

  const handleSignout = () => {
    dispatch(logoutUser(history));
  };

  return (
    <div className={headerClass}>
      <div className="container-fluid">
        <div className="nk-header-wrap">
          <div className="nk-menu-trigger d-xl-none ml-n1">
            <Toggle
              className="nk-nav-toggle nk-quick-nav-icon d-xl-none ml-n1"
              icon="menu"
              click={props.sidebarToggle}
            />
          </div>
          <div className="nk-header-brand d-xl-none">
            <Logo />
          </div>
          <div className="d-flex justify-content-center position-relative ml-2 font-weight-bold" >User Pending Review: <p className="text-danger font-weight-bold ml-1">(0)</p></div>
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">

              <li className="notification-dropdown mr-n1" onClick={() => setVisibility(false)}>
                <a onClick={handleSignout}>
                  <Button color="danger" size="sm">Logout</Button></a>
              </li>
              {/* <li className="user-dropdown"  onClick={() => setVisibility(false)}>
                <User />
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
