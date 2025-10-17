//src/app/test/data.ts

export const getPosts = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
        cache: 'no-store',
    });

    return res.json();
};