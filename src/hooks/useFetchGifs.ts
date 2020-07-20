import { useEffect, useState } from 'react';
import { fetchGifs } from '../utils/fetchGifs';

interface IFetchHook {
  data: any;
  loading: boolean;
}
export const useFetchGifs = (categoryTitle: string): IFetchHook => {
  const [data, setData] = useState<IFetchHook>({
    data: [],
    loading: true,
  });

  useEffect(() => {
    fetchGifs(categoryTitle).then((data) => {
      setData({
        data,
        loading: false,
      });
    });
  }, [categoryTitle]);

  return data;
};
