import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, User } from 'lucide-react';

type RegisterFormData = {
  name: string;
  phoneNumber: string;
  userType: 'client' | 'driver';
};

const Register: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>();
  const [userType, setUserType] = useState<'client' | 'driver'>('client');

  const onSubmit = (data: RegisterFormData) => {
    console.log({ ...data, userType });
    // TODO: Implement registration logic
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Inscription</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Nom complet</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Ce champ est requis' })}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Entrez votre nom complet"
            />
          </div>
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-700">Numéro de téléphone</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="tel"
              id="phoneNumber"
              {...register('phoneNumber', { required: 'Ce champ est requis' })}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Entrez votre numéro de téléphone"
            />
          </div>
          {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Type d'utilisateur</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="client"
                checked={userType === 'client'}
                onChange={() => setUserType('client')}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Client</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="driver"
                checked={userType === 'driver'}
                onChange={() => setUserType('driver')}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Chauffeur</span>
            </label>
          </div>
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-3 px-4 rounded-full font-semibold shadow-md">
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Register;