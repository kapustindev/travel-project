import { Globe } from '../../../../components/icons/Globe.tsx';
import { BurgerMenu } from '../../../../components/icons/BurgerMenu.tsx';
import { ProfilePic } from '../../../../components/icons/ProfilePic.tsx';
import { ActionContainer } from '../ActionContainer';

const UserProfile = () => {
  return (
    <div className="flex items-center">
      <button className="p-3 rounded-3xl hover:bg-gray-100">
        Airbnb your home
      </button>
      <button className="p-3 rounded-3xl hover:bg-gray-100 mr-1.5">
        <Globe className="w-4 h-4" />
      </button>
      <ActionContainer>
        <BurgerMenu className="w-4 h-4 stroke-3 stroke-gray-800 ml-1.5" />
        <ProfilePic className="w-8 h-8 fill-gray-500 ml-4" />
      </ActionContainer>
    </div>
  );
};

export default UserProfile;
