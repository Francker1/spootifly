import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useMusicContextValue } from '../helpers/AppContext';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const [{ token }] = useMusicContextValue();

  return (
    <Route
      {...props}
      render={(props) => (token ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default ProtectedRoute;
