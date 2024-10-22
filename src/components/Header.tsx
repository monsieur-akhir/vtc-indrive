import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Car size={24} />
          <span className="text-xl font-bold">Demande à Proximité</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/login" className="hover:text-blue-200">Connexion</Link></li>
            <li><Link to="/register" className="hover:text-blue-200">Inscription</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;