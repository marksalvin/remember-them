/* global document */
import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import configureStore from '../../state/store/index';
// import registerServiceWorker from './register-service-worker';
import Routes from './routes';
import Loading from './components/Loading';
// import './styles/style.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#7b5e57',
      main: '#4e342e',
      dark: '#260e04',
      contrastText: '#fff',
    },
    secondary: {
      light: '#d2ce56',
      main: '#9e9d24',
      dark: '#6c6f00',
      contrastText: '#000',
    },
  },
});

const { persistor, store } = configureStore();

// persistor.purge(); // Debug to clear persist

const rootElement = document.getElementById('root');

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Fragment>
          <CssBaseline />
          <Router>
            <Routes />
          </Router>
        </Fragment>
      </PersistGate>
    </Provider>
  </MuiThemeProvider>
);

render(<Root />, rootElement);
// registerServiceWorker();
