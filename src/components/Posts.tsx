'use client';

import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/app/test/data';
import Link from 'next/link';

export default function Posts() {

  const { data, isLoading } = useQuery({
    queryKey: ['mydata'],
    queryFn: getPosts,
     refetchOnMount: 'always', // ⚡ tvinger fetch uanset cache/hydration
  });

  if (isLoading) return <p>Loading...</p>;

  return (

    <>

 <nav>
        <Link href="/">Home</Link>
      </nav>

    <ul>
    
      {data.map((n: any) => (
        
        <li key={n.id}>{n.title}</li>
       
      ))}
    </ul>
    </>

  );
}
