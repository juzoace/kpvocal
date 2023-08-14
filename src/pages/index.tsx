// src/pages/index.tsx
import 'tailwindcss/tailwind.css';
import React from 'react';
import BooksList from '../components/Organisms/BookList';

const HomePage = () => {
  return (
    <div>
      <h1 className='text-center text-4xl font-bold leading-[8rem]'>Books</h1>
      <BooksList />
    </div>
  );
};

export default HomePage;
