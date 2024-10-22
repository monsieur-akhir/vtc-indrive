import React from 'react';
import { MapPin, Clock, CreditCard } from 'lucide-react';

const ClientDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tableau de bord</h1>
      
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4">Dernière course</h2>
        <div className="flex items-center mb-2">
          <MapPin className="text-blue-500 mr-2" size={20} />
          <span>123 Rue de Paris, 75001 Paris</span>
        </div>
        <div className="flex items-center mb-2">
          <Clock className="text-blue-500 mr-2" size={20} />
          <span>Il y a 2 jours</span>
        </div>
        <div className="flex items-center">
          <CreditCard className="text-blue-500 mr-2" size={20} />
          <span>25,50 €</span>
        </div>
      </div>
      
      <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-full font-semibold shadow-md">
        Nouvelle course
      </button>
    </div>
  );
};

export default ClientDashboard;