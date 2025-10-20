//src/app/testagain/componets/GetMoreData.tsx

'use client';

import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/services/data';
import Link from 'next/link';

export default function GetMorePosts() {

const { data, isLoading } = useQuery({
  queryKey: ['mydata'],
  queryFn: getPosts,
  //staleTime: 1000 * 60 * 5,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
});

  if (isLoading) return <p>Loading...</p>;

  return (

    <>

 <nav>
        <Link href="/test">test</Link>
      </nav>

    <ul>
    
      {data?.map((n) => (
        
        <li key={n.id}>{n.body}</li>
       
      ))}
    </ul>
    </>

  );
}
