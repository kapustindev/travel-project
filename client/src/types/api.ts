export interface IDatesRange {
  startDate: Date;
  endDate: Date;
}

enum EUserRole {
  Host = 'host',
  Guest = 'guest',
}

interface IHostData {
  isSuper: boolean;
}

interface IGuestData {
  trips: ITrip[];
  wishlists: IWishList[];
}

interface IWishList {
  title: string;
  accommodations: IAccommodation[];
}

interface ITrip {
  accommodation: IAccommodation;
  datesRange: IDatesRange;
}

interface IUser<T extends EUserRole> {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isVerified: boolean;
  photo: string;
  role: T;
  data: T extends EUserRole.Host ? IHostData : IGuestData;
}

interface IReview {
  author: IUser<EUserRole.Guest>;
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
