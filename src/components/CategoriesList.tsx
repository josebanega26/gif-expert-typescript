import React, { useState, useEffect } from 'react';
import { api, limits } from '../constants/api';
import CategoryItem from './CategoryItem';

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
      const gifList = data.map(({ id, title, images }: any) => ({
        id,
        title,
        img: images?.downsized_medium.url,
      }));
      console.log('gifList', gifList);
    } catch (error) {
      console.log('error', error);
    }
  };

  // const [categoryData, setCategoryData] = useState([]);

  return (
    <div>
      <h3>{categoryTitle}</h3>
      {/* {data.map((category, index) => {
        return <CategoryItem item={category} id={index}></CategoryItem>;
      })} */}
    </div>
  );
};

export default Categories;
