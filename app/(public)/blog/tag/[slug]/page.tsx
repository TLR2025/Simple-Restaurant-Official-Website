import { getPayload } from "payload";
import config from "@payload-config";
import { notFound, redirect } from "next/navigation";
import { Metadata } from "@/types/metadata";
import { lato, pacifico } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import GridBg from "@/components/grid-bg";
import Pagination from "@/components/posts/pagination";
import BlogArticleCard from "@/components/posts/blog-article-card";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page: number } | undefined>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = (await params).slug;
  const payload = await getPayload({ config });

  const tagData = await payload.find({
    collection: "tags",
    where: {
      slug: { equals: slug },
    },
  });

  if (!tagData.docs[0]) {
    notFound();
  }

  const tag = tagData.docs[0];

  return {
    title: `${process.env.NEXT_PUBLIC_SITE_NAME} - Posts tagged with "${tag.tagName}" - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    description: `Find all blog posts tagged with "${tag.tagName}".`,
    keywords: [tag.tagName],
    openGragh: {
      title: `${process.env.NEXT_PUBLIC_SITE_NAME} - Posts tagged with "${tag.tagName}"`,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/tag/${slug}`,
      description: `Find all blog posts tagged with "${tag.tagName}".`,
      siteName: process.env.NEXT_PUBLIC_SITE_NAME!,
      images: [],
      type: "website",
      locale: "en",
    },
  };
}

export default async function TagPage({ params, searchParams }: PageProps) {
  const slug = (await params).slug;
  const unpackedSearchParams = await searchParams;
  if (!unpackedSearchParams || !unpackedSearchParams.page) {
    redirect(`/blog/tag/${slug}?page=1`);
  }

  const payload = await getPayload({ config });

  const tagData = await payload.find({
    collection: "tags",
    where: {
      slug: { equals: slug },
    },
  });

  if (!tagData.docs[0]) {
    notFound();
  }

  const tag = tagData.docs[0];

  const postsData = await payload.find({
    collection: "posts",
    limit: 6,
    page: unpackedSearchParams.page,
    sort: ["-createdAt"],
    where: {
      "Tags.slug": {
        equals: slug,
      },
      published: {
        equals: true,
      },
    },
    depth: 8,
  });

  const posts = postsData.docs;

  return (
    <div className={cn("pt-28 pb-16", "w-screen h-min-screen", "relative")}>
      <GridBg />

      <div
        className={cn(
          "w-full h-full",
          "flex flex-col items-center justify-center",
          "space-y-4"
        )}
      >
        <p className={cn("text-3xl text-red-600", pacifico.className)}>
          Our Blog
        </p>

        <div
          className={cn(
            "text-black text-5xl text-center tracking-widest font-bold",
            "pb-8",
            lato.className
          )}
        >
          POSTS TAGGED WITH: <span className="text-blue-500">{tag.tagName}</span>
        </div>

        {posts.length > 0 ? (
          <>
            <div
              className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                "w-full max-w-6xl px-4"
              )}
            >
              {posts.map((post) => (
                <BlogArticleCard key={post.id} article={post} />
              ))}
            </div>
            <Pagination
              currentPage={postsData.page!}
              totalPages={postsData.totalPages}
              hasPrev={postsData.hasPrevPage}
              hasNext={postsData.hasNextPage}
              prefixURL={`/blog/tag/${slug}?page=`}
            />
          </>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-700">
              No posts found
            </h2>
            <p className="mt-2 text-gray-500">
              There are no posts tagged with &quot;{tag.tagName}&quot; yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
