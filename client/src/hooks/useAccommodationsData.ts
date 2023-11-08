import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IAccommodation } from '../types/api.ts';

export const useAccommodationsData = () => {
  return useQuery<IAccommodation[]>({
    queryKey: ['accommodations'],
    queryFn: async () =>
      await axios.get('http://localhost:3000/').then(({ data }) => data.data),
    staleTime: 60 * 1000 * 1000,
  });
};
