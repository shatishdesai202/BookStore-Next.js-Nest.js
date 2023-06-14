import React from "react";
import withPrivateRoute from "./withPrivateRoute";

const AuthCheck = (props) => {
  return <div>AuthCheck</div>;
};

export default withPrivateRoute(AuthCheck);
