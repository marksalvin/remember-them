import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Simple from './templates/Simple';
import Simpler from './templates/Simpler';
import Home from './pages/Home';
import People from '../containers/People';
import Person from './pages/Person';
import Error from './pages/Error';

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
        <Simple title="Remember Me">
          <People ChildComponent={Home} />
        </Simple>
      )}
    />
    <Route
      path="/person/:index"
      render={props => (
        <Simpler>
          <People ChildComponent={Person} index={parseInt(props.match.params.index, 10)} />
        </Simpler>
      )}
    />
    <Route
      render={props => (
        <Simpler>
          <Error />
        </Simpler>
      )}
    />
  </Switch>
);

export default Index;
