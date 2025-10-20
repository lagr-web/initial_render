'use client';

import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/services/data';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Posts() {

  const { data, isLoading, error, status } = useQuery({
    queryKey: ['mydata'],
    queryFn: getPosts, // eller getPosts hvis client-kompatibel
    staleTime: 1000 * 60 * 5, // valgfrit - matcher providerens default
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    console.log('Posts useQuery status:', status);
  }, [status]);

  if (isLoading) return <p>Loading...</p>;

  return (

    <>

 <nav>
        <Link href="/testagain">testagain</Link>
      </nav>

    <ul>
    
      {data?.map((n) => (
        
        <li key={n.id}>{n.title}</li>
       
      ))}
    </ul>
    </>

  );
}
