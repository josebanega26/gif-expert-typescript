import React, { useState } from 'react';
import Footer from './components/Footer';
import AddCategory from './components/AddCategory';
import CategoriesList from './components/CategoriesList';

const App = () => {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <div className='container'>
        <h2>Gif-Expert with typescript</h2>
        <AddCategory setCategories={setCategories}></AddCategory>
        {categories.map((category) => (
          <CategoriesList categoryTitle={category} key={category} />
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
