import React from 'react';
import * as Expo from 'expo';
import Root from './src/components/native/index';
import configureStore from './src/state/store/index';

const { persistor, store } = configureStore();

// persistor.purge(); // Debug to clear persist

Expo.Font.loadAsync({
  Roboto: require('native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
});

export default function App() {
  return <Root store={store} persistor={persistor} />;
}
