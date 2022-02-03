import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";

const PrivateRoute = (props) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "https://secret-family-recipes-8.herokuapp.com/api/auth/validateToken",
        { token }
      )
      .catch(() => {
        localStorage.removeItem("token");
      });
  }, []);
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
