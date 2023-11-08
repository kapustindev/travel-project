import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import { Logo } from '../../../components/icons/Logo.tsx';
import { useState } from 'react';
import { Globe } from '../../../components/icons/Globe.tsx';
import { EUserRole } from '../../../types/api.ts';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHeaderOpen = () => setIsOpen((prev) => !prev);

  return (
    <header
      className={`sticky z-10 top-0 px-20 sm:px-10 ${
        isOpen ? 'h-52' : 'h-20'
      } border-b-2 mb-10 text-sm transition-[height] bg-white`}
    >
      <div className="flex items-center justify-between h-20 relative">
        <Logo className="text-blue-700" />
        <SearchBar onClick={handleHeaderOpen} />
        <div className="flex items-center">
          <button className="p-3 rounded-3xl hover:bg-gray-100">
            Airbnb your home
          </button>
          <button className="p-3 rounded-3xl hover:bg-gray-100 mr-1.5">
            <Globe className="w-4 h-4" />
          </button>
          <UserProfile role={EUserRole.Guest} />
        </div>
      </div>
    </header>
  );
};
