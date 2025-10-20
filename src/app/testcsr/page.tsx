"use client";

import { useQuery } from "@tanstack/react-query";

const Page = ()=> {

    const { data, isLoading } = useQuery({

        queryKey: ["csrdata"],
        queryFn: async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
            return res.json();
        },
    });

    if (isLoading) return <p>Indlæser...</p>;

    return (

        data.map((n: any) => (

            <div key={n.id}>{n.title}</div>

        ))



    )
}

export default Page;
