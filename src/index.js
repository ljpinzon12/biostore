import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import registerServiceWorker from './registerServiceWorker';
import ducks from './ducks'
import App from './components/App';
import './index.css'

injectTapEventPlugin();
const store = createStore(ducks, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider>
        <Router>
          <App />
        </Router>
      </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
// registerServiceWorker();
