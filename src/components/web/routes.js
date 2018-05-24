import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WithHeaderTemplate from './templates/WithHeaderTemplate';
import BasicTemplate from './templates/BasicTemplate';
import HomePage from './pages/HomePage';
import People from '../containers/People';
import PersonPage from './pages/PersonPage';
import ErrorPage from './pages/ErrorPage';

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
        <WithHeaderTemplate title="Remember Me">
          <People ChildComponent={HomePage} />
        </WithHeaderTemplate>
      )}
    />
    <Route
      path="/person/:index"
      render={props => (
        <BasicTemplate>
          <People ChildComponent={PersonPage} index={parseInt(props.match.params.index, 10)} />
        </BasicTemplate>
      )}
    />
    <Route
      render={props => (
        <BasicTemplate>
          <ErrorPage />
        </BasicTemplate>
      )}
    />
  </Switch>
);

export default Index;
