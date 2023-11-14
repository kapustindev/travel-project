import { FC, useMemo } from 'react';
import { TAccommodationCard } from '../../../types/api.ts';
import { Heart } from '../../../components/icons/Heart.tsx';
import { Star } from '../../../components/icons/Star.tsx';

export const AccommodationCard: FC<TAccommodationCard> = ({
  photos,
  price,
  reviews,
  country,
  city,
  description,
  isFavorite = false,
}) => {
  const rating = useMemo(() => {
    return (
      reviews.reduce((acc, { rating }) => acc + rating, 0) / reviews.length
    ).toFixed(2);
  }, [reviews]);

  return (
    <div className="flex w-80 flex-col justify-start">
      <div
        className="relative mb-2 h-72 rounded-2xl object-cover"
        style={{ backgroundImage: `url(${photos[0]})` }}
      >
        <button
          className={`absolute right-5 top-5 h-6 w-6 stroke-white stroke-2 active:scale-90 ${
            isFavorite ? 'fill-blue-600' : 'fill-[rgba(0,0,0,0.5)]'
          }`}
        >
          <Heart />
        </button>
      </div>
      <div className="mb-0.5 flex items-center justify-between text-sm font-bold">
        <div className="font-medium">
          {city} ({country})
        </div>
        <div className="flex items-center font-light">
          <Star className="mr-1 h-3 w-3" />
          {rating}
        </div>
      </div>
      <div className="mb-1.5 truncate text-sm font-light tracking-wide text-gray-500">
        {description}
      </div>
      <div className="text-sm">
        ${price} <span className="font-light">night</span>
      </div>
    </div>
  );
};
