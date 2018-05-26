import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';
import DefaultProps from './constants/navigation';
import AppConfig from '../../constants/config';
import BasicTemplate from './templates/BasicTemplate';
import People from '../containers/People';
import HomePage from './pages/HomePage';
import PersonPage from './pages/PersonPage';

const Index = (
  <Stack key="root" {...DefaultProps.navbarProps}>
    <Scene
      key="homepage"
      component={() => (
        <BasicTemplate title="Remember Them">
          <People ChildComponent={HomePage} />
        </BasicTemplate>
      )}
      title={AppConfig.appName.toUpperCase()}
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
