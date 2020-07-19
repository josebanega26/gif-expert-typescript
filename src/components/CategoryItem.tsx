import React from 'react';

interface CategoryItemProps {
  item: string;
  id: number;
}
const CategoryItem = ({ item, id }: CategoryItemProps) => {
  return (
    <div key={id}>
      <h2>{item}</h2>
    </div>
  );
};

export default CategoryItem;
