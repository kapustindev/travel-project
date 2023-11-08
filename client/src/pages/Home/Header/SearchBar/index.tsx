import { FC } from 'react';
import { datesRangeToString } from '../../../../utils/dates.ts';
import { Search } from '../../../../components/icons/Search.tsx';
import { ActionContainer } from '../ActionContainer';
import { IDatesRange } from '../../../../types/api.ts';

interface Props {
  location?: string;
  datesRange?: IDatesRange;
  guestCount?: number;
  onClick: () => void;
}

const SearchBar: FC<Props> = ({
  location,
  datesRange,
  guestCount,
  onClick,
}) => {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
      onClick={onClick}
    >
      <ActionContainer withDivider>
        <button className="px-4">{location || 'Anywhere'}</button>
        <button className="px-4 whitespace-nowrap truncate">
          {datesRangeToString(datesRange) || 'Any week'}
        </button>
        <div className="flex items-center">
          <button
            className={`px-4 whitespace-nowrap truncate ${
              guestCount ? '' : 'font-light text-gray-500'
            }`}
          >
            {guestCount || 'Add'} guests
          </button>
          <button className="w-8 h-8 bg-blue-600 rounded-3xl flex items-center justify-center">
            <Search className="w-3 h-3 stroke-5 stroke-amber-50" />
          </button>
        </div>
      </ActionContainer>
    </div>
  );
};

export default SearchBar;
