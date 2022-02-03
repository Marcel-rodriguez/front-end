import React, { useEffect, useContext } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import { LoggedInContext } from "../contexts/LoggedInContext";

const PrivateRoute = (props) => {
  const {setIsLoggedIn} = useContext(LoggedInContext)
  const {push} = useHistory()
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "https://secret-family-recipes-8.herokuapp.com/api/auth/validateToken",
        { token }
      )
      .catch(() => {
        localStorage.removeItem("token");
        setIsLoggedIn(false)
        push('/')
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
