import React from 'react';
import { MapPin, Clock, CreditCard, ToggleLeft } from 'lucide-react';

const DriverDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tableau de bord</h1>
      
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Statut</h2>
          <button className="flex items-center text-green-500">
            <ToggleLeft size={24} className="mr-1" />
            En ligne
          </button>
        </div>
        <p className="text-gray-600">Vous êtes visible pour les clients à proximité.</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4">Dernière course</h2>
        <div className="flex items-center mb-2">
          <MapPin className="text-blue-500 mr-2" size={20} />
          <span>456 Avenue des Champs-Élysées, 75008 Paris</span>
        </div>
        <div className="flex items-center mb-2">
          <Clock className="text-blue-500 mr-2" size={20} />
          <span>Il y a 3 heures</span>
        </div>
        <div className="flex items-center">
          <CreditCard className="text-blue-500 mr-2" size={20} />
          <span>32,75 €</span>
        </div>
      </div>
      
      <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-full font-semibold shadow-md">
        Voir les courses disponibles
      </button>
    </div>
  );
};

export default DriverDashboard;