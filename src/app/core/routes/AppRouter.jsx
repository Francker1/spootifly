import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import CoverScreen from '../screens/cover';
import MusicScreen from '../screens/music-app';
import SearchScreen from '../screens/search';

import ProtectedRoute from './ProtectedRoute';

const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={CoverScreen} />
          <Route exact path="/app" component={MusicScreen} />

          {/* I have implemented a protected router to example*/}
          <ProtectedRoute exact path="/search" component={SearchScreen} />

          {/* If not match with route if first level, redirect to home, but also you can show Route that render 404 Component */}
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
