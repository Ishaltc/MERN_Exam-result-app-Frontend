import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore } from 'redux';
import {composeWithDevTools} from "redux-devtools-extension"

const store = createStore(rootReducer,composeWithDevTools())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store ={store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
);


