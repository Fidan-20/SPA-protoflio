
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Haqqinda from './Haqqinda';
import Isnumuneler from './Isnumuneler';
import Elaqemelumatlari from './Elaqemelumatlari';
import Home from './Home';
import './App.css'

function App() {
  return (
    <div>
    
      <Routes>
        <Route path="/haqqinda" element={<Haqqinda />} />
        <Route path="/work" element={<Isnumuneler />} />
        <Route path="/contact" element={<Elaqemelumatlari />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
