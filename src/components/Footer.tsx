import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      © Made by &nbsp; <a href='https://josebanega.netlify.app/'>Jose Banega</a>
      &nbsp;
      {year} - &nbsp;
      <a href='https://www.udemy.com/course/react-cero-experto/'>
        Fernando Herrera React Course
      </a>
    </footer>
  );
};

export default Footer;
