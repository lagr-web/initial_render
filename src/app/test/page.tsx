//src/app/test/page.tsx

import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getPosts } from "./data";
import Posts from "@/components/Posts";

const Page = async () => {

    const queryClient = new QueryClient(); //nyt instance, ikke importeret

    await queryClient.prefetchQuery({

        queryKey: ['mydata'],
        queryFn: getPosts

    })

    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrationBoundary state={dehydratedState}>
            <Posts />
        </HydrationBoundary>
    );
}

export default Page;
