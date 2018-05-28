import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';
import * as R from 'ramda';
import DefaultProps from './constants/navigation';
import BasicTemplate from './templates/BasicTemplate';
import People from '../containers/People';
import HomePage from './pages/HomePage';
import PersonPage from './pages/PersonPage';

const i18n = R.path(['root'], require('../../i18n').default);

const Index = (
  <Stack key="root" {...DefaultProps.navbarProps}>
    <Scene
      key="homepage"
      component={() => (
        <BasicTemplate>
          <People ChildComponent={HomePage} />
        </BasicTemplate>
      )}
      title={i18n.appName.toUpperCase()}
      {...DefaultProps.navbarProps}
    />
    <Scene
      key="personpage"
      component={() => (
        <BasicTemplate>
          <People ChildComponent={PersonPage} />
        </BasicTemplate>
      )}
      hideNavBar
    />
  </Stack>
);

export default Index;
