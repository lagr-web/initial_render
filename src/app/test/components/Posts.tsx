'use client';

import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/services/data';
import Link from 'next/link';

export default function Posts() {

  const { data, isLoading, error } = useQuery({
    queryKey: ['mydata'],
    queryFn: getPosts, // eller getPosts hvis client-kompatibel
    staleTime: 1000 * 60 * 5, // valgfrit - matcher providerens default
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

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
