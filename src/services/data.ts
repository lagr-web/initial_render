export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getPosts = async (): Promise<Post[]> => {

  console.log('getPosts called on', typeof window === 'undefined' ? 'server' : 'client');

  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10',
    { next: { revalidate: 60 } } // cache på server i 60s — mindsker eksterne kald);

  )
  
  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
  }

  return res.json();
};