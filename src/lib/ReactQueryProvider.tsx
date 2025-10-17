// src/lib/ReactQueryProvider.tsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type nodeChildren = {
children: ReactNode
}

export default function ReactQueryProvider({ children }: nodeChildren ) {
    // Én queryClient pr. klient (laves i useState for at undgå nyt instance på hver render)
    const [queryClient] = useState(() => new QueryClient());

    return <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} /> {/* Devtools nederst til højre */}
        </QueryClientProvider>;
}
