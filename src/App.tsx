import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portugues from './pages/Portugues';
import Informatica from './pages/Informatica';
import Administrativo from './pages/Administrativo';
import Constitucional from './pages/Constitucional';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portugues' element={<Portugues />} />
        <Route path='/informatica' element={<Informatica />} />
        <Route path='/constitucional' element={<Constitucional />} />
        <Route path='/transito' element={<Portugues />} />
        <Route path='/administrativo' element={<Administrativo />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
