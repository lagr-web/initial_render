//src/app/layout.tsx

import './globals.css';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import ReactQueryProvider from '@/lib/ReactQueryProvider';
import { getPosts } from '../services/data'; // eller prefetche flere queries

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['mydata'], queryFn: getPosts });
  const dehydratedState = dehydrate(queryClient);

  return (
    <html lang="en">
      <body>
        <ReactQueryProvider dehydratedState={dehydratedState}>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}