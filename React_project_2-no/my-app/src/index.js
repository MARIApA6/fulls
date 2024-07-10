import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from './Admin/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

