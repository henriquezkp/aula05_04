import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { store, persitor } from './store';

import theme from './config/theme';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persitor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
