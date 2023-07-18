import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../router/routes';

const AppRouter = () => {
  const isAuth = false;
  return (
    <div>
      {
        isAuth
          ?
          <Routes>
            {privateRoutes.map(route =>
              <Route
                element={route.component}
                path={route.path}
                exact={route.exact}
                key={Date.now()}
              />
            )}
          </Routes>
          :
          <Routes>
            {publicRoutes.map(route =>
              <Route
                element={route.component}
                path={route.path}
                exact={route.exact}
                key={Date.now()}
              />
            )}
          </Routes>
        }
    </div>
  );
};

export default AppRouter;