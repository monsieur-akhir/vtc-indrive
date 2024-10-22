import React from 'react';
import { useForm } from 'react-hook-form';
import { Phone } from 'lucide-react';

type LoginFormData = {
  phoneNumber: string;
  otp: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    // TODO: Implement login logic
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Connexion</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
          <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-700">Code OTP</label>
          <input
            type="text"
            id="otp"
            {...register('otp', { required: 'Ce champ est requis' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez le code OTP reçu"
          />
          {errors.otp && <p className="mt-1 text-sm text-red-600">{errors.otp.message}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-4 rounded-full font-semibold shadow-md">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;