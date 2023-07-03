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
import RegimeDisciplinar from './pages/RegimeDisciplinar';
import Penal from './pages/Penal';

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
        <Route path='/regime-disciplinar' element={<RegimeDisciplinar />} />
        <Route path='/penal' element={<Penal />} />
        <Route path='/especificas' element={<Penal />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
