// import React from 'react';
// import useBooks from '../../hooks/useBooks';
// import BookCard from '../Molecules/BookCard';
// import InfiniteScroll from 'react-infinite-scroll-component';

// interface Book {
//   id: number;
//   title: string;
//   description: string;
//   imageUrl: string;
//   price: number;
//   discount: number;
// }

// const BooksList = () => {
//   const pageSize = 5;
//   const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useBooks(pageSize);
  
//   const handleFetchMore = () => {
//     if (hasNextPage && !isFetchingNextPage) {
//       fetchNextPage();
//     }
//   };
  
//   return (
//     <div className="max-h-screen">
//       <InfiniteScroll
//         dataLength={data?.pages?.length || 0}
//         next={handleFetchMore}
//         hasMore={!!hasNextPage} // Set it based on whether there are more pages
//         loader={isFetchingNextPage && <p className="text-center">Loading more...</p>}
//         scrollThreshold={0.5}
//         endMessage={!hasNextPage && (
//           <p className="text-center text-4xl font-bold leading-[8rem]">No more books to load</p>
//         )}
//       >
//         <div className="flex flex-wrap justify-center items-center gap-[12px]">
//           {data?.pages?.map((page, pageIndex) => (
//             <React.Fragment key={pageIndex}>
//               {page.map((book: Book) => (
//                 <div key={book.id} className="w-[40%] mb-8">
//                   <BookCard book={book} />
//                 </div>
//               ))}
//             </React.Fragment>
//           ))}
//         </div>
//       </InfiniteScroll>
//     </div>
//   );

// };

// export default BooksList;

// import React, { useState, useEffect } from 'react';
// import useBooks from '../../hooks/useBooks';
// import BookCard from '../Molecules/BookCard';

// interface Book {
//   id: number;
//   title: string;
//   description: string;
//   imageUrl: string;
//   price: number;
//   discount: number;
// }

// const BooksList = () => {
//   const pageSize = 10;
//   const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useBooks(pageSize);

//   const [isLoading, setIsLoading] = useState(false);

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const handleScroll = () => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop >=
//       document.documentElement.scrollHeight - 50 // Adjust this threshold as needed
//     ) {
//       // Ensure there's more data to fetch and not already fetching
//       if (hasNextPage && !isFetchingNextPage) {
//         setIsLoading(true);
//         fetchNextPage().then(() => setIsLoading(false));
//       }
//     }
//   };

//   // Attach the scroll event listener
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [handleScroll]);

//   return (
//     <div className="max-h-screen">
//       <div className="flex flex-wrap justify-center items-center gap-[12px]">
//         {data?.pages?.map((page, pageIndex) => (
//           <React.Fragment key={pageIndex}>
//             {page.map((book: Book) => (
//               <div key={book.id} className="w-[40%] mb-8">
//                 <BookCard book={book} />
//               </div>
//             ))}
//           </React.Fragment>
//         ))}
//       </div>
//       {isLoading && <p className="text-center">Loading more...</p>}
//       {!hasNextPage && !isLoading && (
//         <p className="text-center text-4xl font-bold leading-[8rem]">No more books to load</p>
//       )}
//     </div>
//   );
// };

// export default BooksList;



// import React, { useState, useEffect } from 'react';
// import useBooks from '../../hooks/useBooks';
// import BookCard from '../Molecules/BookCard';

// interface Book {
//   id: number;
//   title: string;
//   description: string;
//   imageUrl: string;
//   price: number;
//   discount: number;
// }

// const BooksList = () => {
//   const pageSize = 10;
//   const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useBooks(pageSize);

//   const [isLoading, setIsLoading] = useState(true); // Initially set to true
//   const [isInitialLoad, setIsInitialLoad] = useState(true); // Added for initial load

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const handleScroll = () => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop >=
//       document.documentElement.scrollHeight - 50
//     ) {
//       if (hasNextPage && !isFetchingNextPage) {
//         fetchNextPage().then(() => setIsLoading(false)); // Set isLoading to false after the first load
//       }
//     }
//   };

//   useEffect(() => {
//     // Attach the scroll event listener
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [handleScroll]);

//   useEffect(() => {
//     // Set isLoading to false after the initial load
//     if (isInitialLoad && !isFetchingNextPage) {
//       setIsInitialLoad(false);
//       setIsLoading(false);
//     }
//   }, [isInitialLoad, isFetchingNextPage]);

//   return (
//     <div className="max-h-screen">
//       {isLoading && <p className="text-center">Loading...</p>} {/* Initial loading spinner */}
//       <div className="flex flex-wrap justify-center items-center gap-[12px]">
//         {data?.pages?.map((page, pageIndex) => (
//           <React.Fragment key={pageIndex}>
//             {page.map((book: Book) => (
//               <div key={book.id} className="w-[40%] mb-8">
//                 <BookCard book={book} />
//               </div>
//             ))}
//           </React.Fragment>
//         ))}
//       </div>
//       {isFetchingNextPage && <p className="text-center">Loading more...</p>} {/* Loading more spinner */}
//       {!hasNextPage && !isFetchingNextPage && (
//         <p className="text-center text-4xl font-bold leading-[8rem]"></p>
//       )}
//     </div>
//   );
// };

// export default BooksList;

import React, { useState, useEffect } from 'react';
import useBooks from '../../hooks/useBooks';
import BookCard from '../Molecules/BookCard';

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

  const [isLoading, setIsLoading] = useState(true); // Initially set to true
  const [isInitialLoad, setIsInitialLoad] = useState(true); // Added for initial load

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight - 50
    ) {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage().then(() => setIsLoading(false)); // Set isLoading to false after the first load
      } else {
        // No more pages to load, remove the scroll event listener
        window.removeEventListener('scroll', handleScroll);
      }
    }
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    // Set isLoading to false after the initial load
    if (isInitialLoad && !isFetchingNextPage) {
      setIsInitialLoad(false);
      setIsLoading(false);
    }
  }, [isInitialLoad, isFetchingNextPage]);

  return (
    <div className="max-h-screen">
      {isLoading && <p className="text-center">Loading...</p>} {/* Initial loading spinner */}
      <div className="flex flex-wrap justify-center items-center gap-[12px]">
        {data?.pages?.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((book: Book) => (
              <div key={book.id} className="w-[40%] mb-8">
                <BookCard book={book} />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      {isFetchingNextPage && <p className="text-center"></p>} {/* Loading more spinner */}
      {!hasNextPage && !isFetchingNextPage && (
        <p className="text-center text-4xl font-bold leading-[8rem]"></p>
      )}
    </div>
  );
};

export default BooksList;
