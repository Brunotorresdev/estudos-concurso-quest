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
      <Link to="/transito" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4">
      transito
      </Link>
    </div>
  );
};

export default Home;