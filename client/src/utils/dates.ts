import { IDatesRange } from '../types';
import { format } from 'date-fns';

export const datesRangeToString = (datesRange?: IDatesRange) => {
  if (!datesRange) {
    return '';
  }

  return `${format(datesRange.startDate, 'MMM d')} - ${format(
    datesRange.endDate,
    'MMM d',
  )}`;
};
