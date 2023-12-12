import React, { Suspense, useLayoutEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { RedirectAs404 } from "../utils/Utils";
import Login from "../pages/auth/Login";
import Homepage from "../pages/index";
import User from "../pages/User";
import UserDetails from "../components/partials/UserDetails";



const Pages = () => {
  useLayoutEffect(() => {
    // window.scrollTo(0, 0);
  });

  return (
    <Suspense fallback={<div />}>
      <Switch>

        <Route exact path={`/`} component={Homepage}></Route>
        <Route exact path={`/user`} component={User}></Route>
        <Route exact path={`/userDetails`} component={UserDetails}></Route>
        <Route component={RedirectAs404}></Route>
      </Switch>
    </Suspense>
  );
};
export default Pages;
export const publicRoutesData = [
  { path: `/login`, component: Login },
];
