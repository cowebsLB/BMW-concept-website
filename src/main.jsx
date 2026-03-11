import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ExperienceProvider } from './context/ExperienceContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ExperienceProvider>
        <App />
      </ExperienceProvider>
    </BrowserRouter>
  </React.StrictMode>
);


