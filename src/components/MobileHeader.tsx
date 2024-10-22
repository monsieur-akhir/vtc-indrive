import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const MobileHeader: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold text-blue-600">
          Demande à Proximité
        </Link>
        <button className="text-gray-600">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default MobileHeader;