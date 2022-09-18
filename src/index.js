import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

import ReduxWrapper from '@/store/store';
import App from "@/App";

// Import of styles
import '@/styles/index.scss';
import './index.css';

// Tests

// --- Render on the DOM ---
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ReduxWrapper>
      <App />
    </ReduxWrapper>
  </BrowserRouter>
  );