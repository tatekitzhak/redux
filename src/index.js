import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/store/store';

import App from "@/App";


// import ReactDOM from 'react-dom/client';
import './index.css';

// Import of an asset
import webpackLogo from '@/assets/images/webpack-logo.svg'

// Import of styles
import '@/styles/index.scss';

// Tests


// --- Render on the DOM ---
const root = document.getElementById("root");
const view = createRoot(root);
view.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);


