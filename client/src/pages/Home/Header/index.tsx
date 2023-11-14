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
      className={`sticky top-0 z-10 px-20 sm:px-10 ${
        isOpen ? 'h-52' : 'h-20'
      } mb-10 border-b-2 bg-white text-sm transition-[height]`}
    >
      <div className="relative flex h-20 items-center justify-between">
        <Logo className="text-blue-700" />
        <SearchBar onClick={handleHeaderOpen} />
        <div className="flex items-center">
          <button className="rounded-3xl p-3 hover:bg-gray-100">
            Airbnb your home
          </button>
          <button className="mr-1.5 rounded-3xl p-3 hover:bg-gray-100">
            <Globe className="h-4 w-4" />
          </button>
          <UserProfile role={EUserRole.Guest} />
        </div>
      </div>
    </header>
  );
};
