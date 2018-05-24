import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';
import DefaultProps from './constants/navigation';
import AppConfig from '../../constants/config';
import WithHeaderTemplate from './templates/WithHeaderTemplate';
import People from '../containers/People';
import HomePage from './pages/HomePage';
import PersonPage from './pages/PersonPage';

const Index = (
  <Stack key="root" {...DefaultProps.navbarProps}>
    <Scene
      key="homepage"
      component={() => (
        <WithHeaderTemplate title="Remember Me">
          <People ChildComponent={HomePage} />
        </WithHeaderTemplate>
      )}
      title="Remember Me"
      {...DefaultProps.navbarProps}
    />
    <Scene
      key="personpage"
      component={() => (
        <WithHeaderTemplate title="something">
          <People ChildComponent={PersonPage} />
        </WithHeaderTemplate>
      )}
      {...DefaultProps.navbarProps}
      title={AppConfig.appName.toUpperCase()}
    />
  </Stack>
);

export default Index;
