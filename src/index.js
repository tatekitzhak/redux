import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from 'react-router-dom'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';

import App from "@/App";

import './index.css';
import store from '@/store/store';
let persistor = persistStore(store)

// Import of styles
import '@/styles/index.scss';

// Tests

// --- Render on the DOM ---
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null}  persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
);


