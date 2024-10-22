import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Bell, User } from 'lucide-react';

const MobileFooter: React.FC = () => {
  return (
    <footer className="bg-white shadow-lg">
      <nav className="container mx-auto px-4 py-3">
        <ul className="flex justify-around">
          <li>
            <Link to="/" className="flex flex-col items-center text-gray-600">
              <Home size={20} />
              <span className="text-xs mt-1">Accueil</span>
            </Link>
          </li>
          <li>
            <Link to="/search" className="flex flex-col items-center text-gray-600">
              <Search size={20} />
              <span className="text-xs mt-1">Recherche</span>
            </Link>
          </li>
          <li>
            <Link to="/notifications" className="flex flex-col items-center text-gray-600">
              <Bell size={20} />
              <span className="text-xs mt-1">Notifications</span>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex flex-col items-center text-gray-600">
              <User size={20} />
              <span className="text-xs mt-1">Profil</span>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default MobileFooter;