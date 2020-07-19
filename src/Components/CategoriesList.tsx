import React from "react";
interface CategoriesProps {
  data: string[];
}
const Categories = ({ data }: CategoriesProps) => {
  const getCategory = (item: string,id:string) => (
    <div key={id}>
      <h2>{item}</h2>
    </div>
  );
  return <div>{ data.map((category,index)=>{
    return getCategory(category,`${index}`)
  }) }</div>
};

export default Categories;
