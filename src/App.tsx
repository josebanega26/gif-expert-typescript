import React, { useState } from 'react';
import Footer from './Components/Footer';
import AddCategory from './Components/AddCategory';
import CategoriesList from './Components/CategoriesList';

function App() {
  const [categories, setCategories] = useState(['Star wars', 'Lord of rings']);

  return (
    <>
      <div className='container'>
        <h2>Gif Expert App</h2>
        <AddCategory setCategories={setCategories}></AddCategory>
        <CategoriesList data={categories} />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
