import { format } from 'date-fns';
import { IDatesRange } from '../types/api.ts';

export const datesRangeToString = (datesRange?: IDatesRange) => {
  if (!datesRange) {
    return '';
  }

  return `${format(datesRange.startDate, 'MMM d')} - ${format(
    datesRange.endDate,
    'MMM d',
  )}`;
};
