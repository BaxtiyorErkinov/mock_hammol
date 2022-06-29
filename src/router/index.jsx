import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const RouterApp = () => {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route
            element={<route.component />}
            exact={route.exact}
            path={route.path}
            key={route.path}
          />
        ))}
      </Routes>
    </>
  );
};

export default RouterApp;
