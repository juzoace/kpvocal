import React from 'react';

interface componentProps {
  book: Book;
}

interface Book {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  discount: number;
}

const BookCard:React.FC<componentProps> = ({ book }) => {
  return (
    <div className="w-full bg-slate-50 p-4">
      <div className="flex flex-col justify-center items-center">

        {/* <img src={book.imageUrl} alt={book.title} className="w-64 h-64" /> */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={book.imageUrl} alt={book.title} className="w-44 h-48 md:w-64 md:h-64 lg:w-48 lg:h-48 xl:w-64 xl:h-64 2xl:w-96 2xl:h-96" />

       
        <div className='mt-4'>
          <h2 className='text-left'>레이블라우스</h2>
        </div>
        
        
        <div className="flex flex-col justify-center items-center">

          <div className="flex gap-10 md:gap-[10rem] justify-between items-center">
            <p className="text-sm font-bold leading-3 tracking-normal text-left text-red-600 ">{book.discount} %</p>
            <p>{book.price} 원</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
