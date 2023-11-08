export interface IDatesRange {
  startDate: Date;
  endDate: Date;
}

export enum EUserRole {
  Host = 'host',
  Traveler = 'traveler',
  Guest = 'guest',
}

export interface INotification {
  id: string;
  isRead: boolean;
}

interface IAccount {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isVerified: boolean;
  photo: string;
  notifications: INotification[];
}

interface IHostData extends IAccount {
  isSuper: boolean;
}

interface ITravelerData extends IAccount {
  trips: ITrip[];
  wishlists: IWishList[];
}

type TUserDataMap = {
  [EUserRole.Guest]: Record<string, never>;
  [EUserRole.Traveler]: ITravelerData;
  [EUserRole.Host]: IHostData;
};

interface IWishList {
  title: string;
  accommodations: IAccommodation[];
}

interface ITrip {
  accommodation: IAccommodation;
  datesRange: IDatesRange;
}

export interface IUser<T extends EUserRole> {
  role: T;
  data: TUserDataMap[T];
}

interface IReview {
  author: IUser<EUserRole.Traveler>;
  trip: ITrip;
  description: string;
  rating: number;
}

export interface IAccommodation {
  _id: string;
  title: string;
  description: string;
  photos: string[];
  city: string;
  country: string;
  reviews: IReview[];
  price: number;
  owner: IUser<EUserRole.Host>;
  amenities: [];
}

export type TAccommodationCard = Pick<
  IAccommodation,
  | '_id'
  | 'photos'
  | 'city'
  | 'country'
  | 'reviews'
  | 'price'
  | 'description'
  | 'owner'
> & { isFavorite?: boolean };
