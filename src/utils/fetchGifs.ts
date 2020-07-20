import { api, limits } from '../constants/api';
import { IGif } from '../interfaces/gifListInterface';

export const fetchGifs = async (categoryTitle: string) => {
  try {
    const res = await fetch(`${api}${categoryTitle}${limits}`);
    const { data } = await res.json();
    const gifList: IGif[] = data.map(({ id, title, images }: any) => ({
      id,
      title,
      img: images?.downsized_medium.url,
    }));
    return gifList;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};
