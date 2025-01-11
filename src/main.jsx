import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Correct import for App
import './styles/index.css'; // Ensure CSS is imported

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);