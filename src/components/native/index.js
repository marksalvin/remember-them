import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { Root, StyleProvider } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import theme from '../../../native-base-theme/variables/commonColor';

import Routes from './routes';
import Loading from './molecules/Loading';

const App = ({ store, persistor }) => (
  <Root>
    <Provider store={store}>
      <PersistGate
        loading={<Loading />}
        persistor={persistor}
      >
        <StyleProvider style={getTheme(theme)}>
          <Router>
            {Routes}
          </Router>
        </StyleProvider>
      </PersistGate>
    </Provider>
  </Root>
);

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
  persistor: PropTypes.shape({}).isRequired,
};

export default App;
