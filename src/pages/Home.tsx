import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-2xl font-bold mb-6 text-center">Où allez-vous ?</h1>
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex items-center mb-4">
          <MapPin className="text-blue-500 mr-2" size={20} />
          <input
            type="text"
            placeholder="Votre position"
            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-center">
          <Search className="text-blue-500 mr-2" size={20} />
          <input
            type="text"
            placeholder="Votre destination"
            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <button className="bg-blue-500 text-white py-3 px-6 rounded-full font-semibold shadow-md">
        Rechercher un chauffeur
      </button>
      <div className="mt-auto">
        <p className="text-center text-gray-600 mb-4">Pas encore de compte ?</p>
        <div className="flex justify-center space-x-4">
          <Link to="/login" className="bg-white border border-blue-500 text-blue-500 py-2 px-6 rounded-full font-semibold">
            Connexion
          </Link>
          <Link to="/register" className="bg-green-500 text-white py-2 px-6 rounded-full font-semibold">
            Inscription
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;