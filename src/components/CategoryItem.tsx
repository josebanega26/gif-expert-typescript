import React from 'react';
import { IGif } from '../interfaces/gifListInterface';
import './CategoryItem.css';
interface CategoryItemProps {
  item: IGif;
}
const CategoryItem = ({ item }: CategoryItemProps) => {
  return (
    <div className='categoryItem--container' id={item.id}>
      <img src={item.img} alt={item.title} />
      <p>{item.title}</p>
    </div>
  );
};

export default CategoryItem;
