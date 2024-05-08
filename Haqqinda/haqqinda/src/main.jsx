import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Haqqinda from './Haqqinda'; 
import Isnumuneler from './Isnumuneler'; 
import Elaqemelumatlari from './Elaqemelumatlari'; 
import Home from './Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> <Route path="/" element={<Home />} /> 
        <Route path="/haqqinda" element={<Haqqinda />} /> 
        <Route path="/work" element={<Isnumuneler />} />
        <Route path="/contact" element={<Elaqemelumatlari />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
