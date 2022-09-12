import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import App from "@/App";
// Import of an asset
import webpackLogo from '@/assets/images/webpack-logo.svg'

// Import of styles
import '@/styles/index.scss';

// Tests


// --- Render on the DOM ---
const root = document.getElementById("root");
const view = createRoot(root);
view.render(
    <App />
);


