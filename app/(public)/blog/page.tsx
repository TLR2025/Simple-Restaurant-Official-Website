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
                        <div key={index} className={cn(
                            "bg-gray-100 p-6 rounded-lg shadow-md",
                            "flex flex-col",
                            "justify-between",
                        )}>
                            <div className="w-full h-96 mb-4">
                                <Link
                                    href={"/blog/"+article.slug}
                                    className={cn(
                                        "block",
                                        "relative", 
                                        "w-full h-48 mb-4",
                                        "bg-gray-300",
                                        "rounded-md overflow-hidden",
                                        "select-none"
                                    )}
                                >
                                    {
                                        (article.metadata.images && article.metadata.images[0] && article.metadata.images[0].image)
                                        ?(
                                            <Image
                                                src={article.metadata.images[0].image.url}
                                                alt={article.metadata.images[0].image.alt}
                                                width={article.metadata.images[0].image.width}
                                                height={article.metadata.images[0].image.height}
                                                placeholder="blur"
                                                blurDataURL={article.metadata.images[0].image.blurDataURL}
                                                className={cn(
                                                    "object-cover object-center",
                                                    "w-full h-full",
                                                    "hover:scale-110",
                                                    "transition-all duration-400 ease-in-out"
                                                )}
                                            />
                                        ):(
                                            <p className={cn(
                                                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                                "font-bold text-3xl text-white",
                                            )}>
                                                {truncate(article.title, 16)}
                                            </p>
                                        )
                                    }
                                </Link>
                                <Link
                                    href={"/blog/"+article.slug}
                                >
                                    <h3 className="text-xl font-bold mb-2">{truncate(article.title, 48)}</h3>
                                </Link>
                                <p className="text-gray-700 mb-4">{truncate(article.metadata.description, 140)}</p>
                            </div>
                            <Button
                                asChild
                                type="button"
                                variant="ghost"
                                className={cn(
                                    "px-4 py-2", 
                                    "bg-red-500 text-white rounded-md", 
                                    "hover:bg-red-600 hover:text-white"
                                )}
                            >
                                <Link
                                    href={"/blog/"+article.slug}
                                >
                                    Read More
                                </Link>
                            </Button>
                        </div>
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