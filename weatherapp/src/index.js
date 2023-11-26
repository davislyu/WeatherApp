import React from 'react';
import { createRoot } from 'react-dom/client';
import store from './app/store';
import { Provider } from 'react-redux';
import './styles/index.css';
import HomePage from "./pages/HomePage"


const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomePage />
    </Provider>
  </React.StrictMode>
);
