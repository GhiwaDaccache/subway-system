import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/buttons.css';
import './styles/colors.css';
import './styles/utilities.css';

import App from './pages/app';
import Admin from './pages/admin';
import Authentication from './pages/authentication';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Application />);
