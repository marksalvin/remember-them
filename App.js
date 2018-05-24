import React from 'react';
import Root from './src/components/native/index';
import configureStore from './src/state/store/index';

const { persistor, store } = configureStore();

// persistor.purge(); // Debug to clear persist

export default function App() {
  return <Root store={store} persistor={persistor} />;
}
