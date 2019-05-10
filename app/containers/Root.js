// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import type { Store } from '../reducers/types';
import Routes from '../Routes';

type Props = {
  store: Store,
  history: {}
};

const theme = {
  palette: {
    primary: {
      main: '#322E3C'
    },
    background: {
      default: '#322E3C'
    },
    type: 'dark'
  }
};

export default class Root extends Component<Props> {
  render() {
    const { store, history } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Routes />
          </ConnectedRouter>
        </Provider>
      </ThemeProvider>
    );
  }
}
