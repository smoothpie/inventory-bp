import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import NavBar from './components/NavBar/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AppLayout = (props) => {
  return(
    <div>
      { props.children }
    </div>
  );
};

ReactDOM.render(
  <MuiThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('main')
);
