/* eslint-env node, jest */

import React from 'react';
import renderer from 'react-test-renderer';

it.skip('app renders without crashing', () => {
  const App = require('./App').default;
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
