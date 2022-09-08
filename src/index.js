import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';


import PageContainer from './Page/Container/PageContainer';
import store from './Redux/store'
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(26 41 124)',
    },
    secondary: {
      main: 'rgb(28 37 87)',
    },
    background: {
      main: '#ededed'
    },
    logo: {
      main: 'rgb(255 71 27);',
    },
    negative: {
      main: '#C10015',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>

        <PageContainer />

      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);
