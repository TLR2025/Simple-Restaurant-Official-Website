import GridBg from "@/components/grid-bg";
import { lato, pacifico } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
import Pagination from "@/components/posts/pagination";
import Image from "next/image";
import { truncate } from "@/lib/truncate";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { generateMetaDataFromURL } from "@/lib/generate-meta-data";
import BlogArticleCard from "@/components/posts/blog-article-card";

export async function generateMetadata(){
  const metadata = await generateMetaDataFromURL("/blog");
  return metadata;
}

export default async function BlogRootPage({
    searchParams
}: {
    searchParams: Promise<{ page: number } | undefined>
}) {
    const unpackedSearchParams = await searchParams;
    // console.log(unpackedSearchParams);
    if(!unpackedSearchParams || !unpackedSearchParams.page)
        redirect("/blog?page=1");
    const payload = await getPayload({config});
    const postsData = await payload.find({
        collection: "posts",
        limit: 6,
        page: unpackedSearchParams.page,
        sort: ["-createdAt"],
        where: { published: { equals: true } },
        depth: 8,
    });
    // console.log(postsData.docs[0].metadata.images[0]);
    return (
        <div className={cn(
            "pt-28 pb-16",
            "w-screen h-min-screen",
            "relative"
        )}>

            <GridBg />

            <div className={cn(
                "w-full h-full",
                "flex flex-col items-center justify-center",
                "space-y-4",
            )}>
                <p className={cn(
                    "text-3xl text-red-600",
                    pacifico.className
                )}>
                    Our Blog
                </p>

                <div className={cn(
                    "text-black text-5xl text-center tracking-[0.2em] font-bold",
                    "pb-8",
                    lato.className
                )}>
                    LATEST ARTICLES
                </div>

                <div className={cn(
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    "w-full max-w-6xl px-4"
                )}>
                    {postsData.docs.map((article, index) => (
                        <BlogArticleCard key={index} article={article} />
                    ))}
                </div>

                <Pagination
                    currentPage={postsData.page!}
                    totalPages={postsData.totalPages}
                    hasPrev={postsData.hasPrevPage}
                    hasNext={postsData.hasNextPage}
                    prefixURL={"/blog?page="}
                />

            </div>
        </div>
    );
}