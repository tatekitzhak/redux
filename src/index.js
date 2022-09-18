import React from "react";
// import { createRoot } from "react-dom/client";

import ReduxWrapper from '@/store/store';

import App from "@/App";


import ReactDOM from 'react-dom/client';


// Import of an asset
import webpackLogo from '@/assets/images/webpack-logo.svg'

// Import of styles
import '@/styles/index.scss';
import './index.css';

// Tests


// --- Render on the DOM ---
const root = document.getElementById("root");
const view = ReactDOM.createRoot(root);
view.render(
  <ReduxWrapper>
    <App />
  </ReduxWrapper>
);


