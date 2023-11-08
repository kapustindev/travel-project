import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import { Logo } from '../../../components/icons/Logo.tsx';
import { useState } from 'react';

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
        <UserProfile />
      </div>
    </header>
  );
};
