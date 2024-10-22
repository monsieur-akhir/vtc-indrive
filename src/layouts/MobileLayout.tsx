import React from 'react';
import { useLocation } from 'react-router-dom';
import MobileHeader from '../components/MobileHeader';
import MobileFooter from '../components/MobileFooter';

interface MobileLayoutProps {
  children: React.ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {!isAuthPage && <MobileHeader />}
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>
      {!isAuthPage && <MobileFooter />}
    </div>
  );
};

export default MobileLayout;