/* eslint-disable react/prop-types */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as R from 'ramda';
import WithHeaderTemplate from './templates/WithHeaderTemplate';
import BasicTemplate from './templates/BasicTemplate';
import HomePage from './pages/HomePage';
import People from '../containers/People';
import PersonPage from './pages/PersonPage';
import ErrorPage from './pages/ErrorPage';

const i18n = R.path(['root'], require('../../i18n').default);

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <WithHeaderTemplate title={i18n.appName.toUpperCase()}>
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
      render={() => (
        <BasicTemplate>
          <ErrorPage />
        </BasicTemplate>
      )}
    />
  </Switch>
);

export default Index;
