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
    <div className="flex flex-col justify-start w-80">
      <div
        className="relative object-cover h-72 rounded-2xl mb-2"
        style={{ backgroundImage: `url(${photos[0]})` }}
      >
        <button
          className={`absolute top-5 right-5 h-6 w-6 stroke-2 stroke-white active:scale-90 ${
            isFavorite ? 'fill-blue-600' : 'fill-[rgba(0,0,0,0.5)]'
          }`}
        >
          <Heart />
        </button>
      </div>
      <div className="flex items-center justify-between font-bold text-sm mb-0.5">
        <div className="font-medium">
          {city} ({country})
        </div>
        <div className="flex items-center font-light">
          <Star className="w-3 h-3 mr-1" />
          {rating}
        </div>
      </div>
      <div className="text-sm font-light tracking-wide text-gray-500 mb-1.5 truncate">
        {description}
      </div>
      <div className="text-sm">
        ${price} <span className="font-light">night</span>
      </div>
    </div>
  );
};
