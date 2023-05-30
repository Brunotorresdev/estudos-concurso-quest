import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portugues from './pages/Portugues';
import Informatica from './pages/Informatica';
import Administrativo from './pages/Administrativo';
import Constitucional from './pages/Constitucional';
import Home from './pages/Home';
import LeiDrogas from './pages/LeiDrogas';
import DireitosHumanos from './pages/DireitosHumanos';
import Normativa03 from './pages/Normativa03';

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
        <Route path='/lei-drogas' element={<LeiDrogas />} />
        <Route path='/direitos-humanos' element={<DireitosHumanos />} />
        <Route path='/normativa-03' element={<Normativa03 />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
