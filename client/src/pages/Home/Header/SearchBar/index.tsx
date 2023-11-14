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
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      onClick={onClick}
    >
      <ActionContainer withDivider>
        <button className="px-4">{location || 'Anywhere'}</button>
        <button className="truncate whitespace-nowrap px-4">
          {datesRangeToString(datesRange) || 'Any week'}
        </button>
        <div className="flex items-center">
          <button
            className={`truncate whitespace-nowrap px-4 ${
              guestCount ? '' : 'font-light text-gray-500'
            }`}
          >
            {guestCount || 'Add'} guests
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-3xl bg-blue-600">
            <Search className="h-3 w-3 stroke-amber-50 stroke-5" />
          </button>
        </div>
      </ActionContainer>
    </div>
  );
};

export default SearchBar;
