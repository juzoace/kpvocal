// src/hooks/useBooks.ts
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';

const fetchBooks = async ({ pageParam = 1, pageSize = 10 }) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/books/all?page=${pageParam}&pageSize=${pageSize}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

const useBooks = (pageSize: number) => {
  return useInfiniteQuery(
    'books',
    ({ pageParam }) => fetchBooks({ pageParam, pageSize }),
    {
      getNextPageParam: (lastPage, pages) => {
        // Calculate the total number of items based on the pages received so far
        const totalItems = pages.reduce((count, page) => count + (page?.length || 0), 0);
        // Check if we need to fetch more pages
        if (totalItems >= pageSize) {
          // Fetch the next page
          return Math.floor(totalItems / pageSize) + 1;
        }
        // No more pages needed
        return false;
      },
    }
  );
};

export default useBooks;
