import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { IGif } from '../interfaces/gifListInterface';
import './CategoriesList.css';
import CategoryItem from './CategoryItem';
interface CategoriesProps {
  categoryTitle: string;
}

const Categories = ({ categoryTitle }: CategoriesProps) => {
  const { data: categoryData, loading } = useFetchGifs(categoryTitle);
  console.log('loading', loading);
  console.log(categoryData);

  return (
    <>
      <h2>{categoryTitle}</h2>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className='categoriesList--container'>
          {categoryData.map((item: IGif) => {
            return <CategoryItem item={item} key={item.id}></CategoryItem>;
          })}
        </div>
      )}
    </>
  );
};

export default Categories;
