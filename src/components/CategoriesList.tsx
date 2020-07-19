import React, { useState, useEffect } from 'react';
import { api, limits } from '../constants/api';
import CategoryItem from './CategoryItem';
import { IGif } from '../interfaces/gifListInterface';
import './CategoriesList.css';
interface CategoriesProps {
  categoryTitle: string;
}

const Categories = ({ categoryTitle }: CategoriesProps) => {
  useEffect(() => {
    fetchGif();
  }, []);

  const fetchGif = async () => {
    try {
      // const category = 'pokemon';
      const res = await fetch(`${api}${categoryTitle}${limits}`);
      const { data } = await res.json();
      const gifList: IGif[] = data.map(({ id, title, images }: any) => ({
        id,
        title,
        img: images?.downsized_medium.url,
      }));
      setCategoryData(gifList);
      console.log('gifList', gifList);
    } catch (error) {
      console.log('error', error);
    }
  };

  const [categoryData, setCategoryData] = useState<IGif[]>([]);

  return (
    <>
      <h2>{categoryTitle}</h2>
      <div className='categoriesList--container'>
        {categoryData.map((item) => {
          return <CategoryItem item={item} key={item.id}></CategoryItem>;
        })}
      </div>
    </>
  );
};

export default Categories;
