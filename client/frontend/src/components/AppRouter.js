import React, { useContext } from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {
  const isAuth = false;
  return (
    <Routes>
      {authRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
    </Routes>
  );
};

export default AppRouter;
