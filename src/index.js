import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from "react-redux";
// eslint-disable-next-line
import { connect } from 'react-redux'
import './index.css';
import App from './App';

import reducer from "./reducers";

const store = createStore(reducer);

// const app = <App text="APPPPPPP" />;

ReactDOM.render(
  <Provider store={store}>
    <App text="THIS IS ORIG TEXT" />
  </Provider>, 
  // app,
  document.getElementById('root')
);

