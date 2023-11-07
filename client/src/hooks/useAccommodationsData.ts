import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useAccommodationsData = <T>() => {
  return useQuery<T[]>({
    queryKey: ['accommodations'],
    queryFn: async () =>
      await axios.get('http://localhost:3000/').then(({ data }) => data.data),
    staleTime: 60 * 1000 * 1000,
  });
};
