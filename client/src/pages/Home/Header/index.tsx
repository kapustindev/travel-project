import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import { Logo } from '../../../components/icons/Logo.tsx';

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-20 h-20 border-b-2 mb-10 text-sm relative">
      <Logo className="text-blue-700" />
      <SearchBar />
      <UserProfile />
    </header>
  );
};
