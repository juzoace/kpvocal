// src/pages/_app.js

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'; // Optional: Devtools for React Query

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient(); // Create a new instance of QueryClient

  return (
    <QueryClientProvider client={queryClient}> {/* Wrap your component tree */}
      <Component {...pageProps} />
      <ReactQueryDevtools /> {/* Optional: Devtools for React Query */}
    </QueryClientProvider>
  );
}

export default MyApp;
