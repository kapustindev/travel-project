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
      <BurgerMenu className="ml-1.5 h-4 w-4 stroke-gray-800 stroke-3" />
      <div className="ml-3 h-8 w-8">
        {role === EUserRole.Guest ? (
          <ProfilePic className=" fill-gray-500" />
        ) : (
          <div
            className="relative h-8 w-8 rounded-3xl bg-contain"
            style={{ backgroundImage: `url(${photo})` }}
          >
            {notifications.length > 0 && (
              <div className="absolute -right-1 -top-1.5 flex h-4 w-4 items-center justify-center rounded-3xl border border-white bg-red-500 text-[9px] text-white">
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
