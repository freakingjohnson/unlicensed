import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme, Reboot } from 'material-ui'
import store from './store'
import App from './App';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#3d688f',
      main: '#003e61',
      dark: '#001837',
    },
    secondary: {
      light: '#9e9994',
      main: '#706b66',
      dark: '#45403c',
    },
    error: {
      main: '#ff0000',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
})

ReactDOM.render(
  <div>
    <Reboot />
    <Provider store={store} >
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  </div>
  , document.getElementById('root'),
);
