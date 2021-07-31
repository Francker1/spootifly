import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Cover from '../screens/cover';

const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Cover} />

          {/* If not match with route if first level, redirect to home, but also you can show Route that render 404 Component */}
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
