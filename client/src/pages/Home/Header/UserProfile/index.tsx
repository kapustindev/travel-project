import { BurgerMenu } from '../../../../components/icons/BurgerMenu.tsx';
import { ProfilePic } from '../../../../components/icons/ProfilePic.tsx';
import { ActionContainer } from '../ActionContainer';
import { EUserRole, INotification } from '../../../../types/api.ts';
import { FC } from 'react';

interface IUserProfile {
  role: EUserRole;
  photo?: string;
  notifications?: INotification[];
}

const UserProfile: FC<IUserProfile> = ({ role, photo, notifications = [] }) => {
  return (
    <ActionContainer>
      <BurgerMenu className="w-4 h-4 stroke-3 stroke-gray-800 ml-1.5" />
      <div className="ml-3 w-8 h-8">
        {role === EUserRole.Guest ? (
          <ProfilePic className=" fill-gray-500" />
        ) : (
          <div
            className="relative w-8 h-8 bg-contain rounded-3xl"
            style={{ backgroundImage: `url(${photo})` }}
          >
            {notifications.length > 0 && (
              <div className="flex justify-center items-center text-[9px] text-white absolute w-4 h-4 -top-1.5 -right-1 rounded-3xl bg-red-500 border border-white">
                {notifications.length}
              </div>
            )}
          </div>
        )}
      </div>
    </ActionContainer>
  );
};

export default UserProfile;
