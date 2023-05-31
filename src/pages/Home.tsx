import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link to="/portugues" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4">
        Português
      </Link>
      <Link to="/administrativo" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4">
      administrativo
      </Link>
      <Link to="/informatica" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4">
        Informática
      </Link>
      <Link to="/constitucional" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4">
      constitucional
      </Link>
      {/* <Link to="/transito" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4">
      transito
      </Link> */}
      <Link to="/lei-drogas" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4">
      Lei de drogas
      </Link>
      <Link to="/direitos-humanos" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4">
      Direitos Humanos
      </Link>
      <Link to="/normativa-03" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4">
      Normativa 03
      </Link>
      <Link to="/regime-disciplinar" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4">
      Regime disciplinar 258/2021
      </Link>
    </div>
  );
};

export default Home;
