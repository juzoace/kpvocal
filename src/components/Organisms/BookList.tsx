import React from 'react';
import useBooks from '../../hooks/useBooks';
import BookCard from '../Molecules/BookCard';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Book {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  discount: number;
}

const BooksList = () => {
  const pageSize = 10;
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useBooks(pageSize);

  const handleFetchMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <div className="max-h-screen">
      <InfiniteScroll
        dataLength={data?.pages?.length || 0}
        next={handleFetchMore}
        hasMore={Boolean(hasNextPage)}
        loader={isFetchingNextPage && <p className="text-center">Loading more...</p>}
        scrollThreshold={0.8}
        endMessage={!hasNextPage && <p className="text-center">No more books to load</p>}
      >
        <div className="flex flex-wrap justify-center items-center">
          {data?.pages?.map((page, pageIndex) => (
            <React.Fragment key={pageIndex}>
              {page.map((book: Book) => (
                <div key={book.id} className="w-1/2 mb-4">
                  <BookCard book={book} />
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </InfiniteScroll>
      {(!isFetchingNextPage || !hasNextPage) && <p className='text-center text-4xl font-bold leading-[8rem]'>No more books to load</p>}
    </div>
  );
};

export default BooksList;


