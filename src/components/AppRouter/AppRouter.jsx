import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../router/routes';
import { AuthContext } from '../../context';

const AppRouter = () => {
  const {isAuth} = useContext(AuthContext);

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