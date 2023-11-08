import type { Meta, StoryObj } from '@storybook/react';

import UserProfile from './index.tsx';
import { EUserRole } from '../../../../types/api.ts';

const meta: Meta<typeof UserProfile> = {
  title: 'Home/Header/UserProfile',
  component: UserProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UserProfile>;

export const GuestProfile: Story = {
  args: {
    role: EUserRole.Guest,
  },
};

export const AuthorizedProfile: Story = {
  args: {
    role: EUserRole.Traveler,
    photo: 'https://avatars.githubusercontent.com/u/49946736?v=4',
  },
};

export const ProfileWithNotifications: Story = {
  args: {
    role: EUserRole.Traveler,
    photo: 'https://avatars.githubusercontent.com/u/49946736?v=4',
    notifications: [{ id: '1', isRead: false }],
  },
};
