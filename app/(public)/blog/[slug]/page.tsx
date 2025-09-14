import { cn } from "@/lib/utils";
import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";
import { lato } from "@/lib/fonts";
import RichTextRenderer from "@/components/posts/rich-text-renderer";
import { lightenHexColor } from "@/lib/lighten-hex-color";
import { Metadata } from "@/types/metadata";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TagList from "@/components/posts/tag-list";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const slug = (await params).slug;
  const payload = await getPayload({ config });
  const postData = await payload.find({
    collection: "posts",
    where: {
      slug: { equals: slug },
    },
    depth: 8,
  });

  if (!postData.docs[0]) {
    return notFound();
  }

  const post = postData.docs[0];
  const metadata: Metadata = {
    title: `${post.metadata.title} - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    description: post.metadata.description,
    keywords: (
      post.metadata.keywords as Array<{ id: string; keyword: string }>
    ).map((v) => v.keyword),
    openGragh: {
      title: post.metadata.title,
      description: post.metadata.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
      siteName: process.env.NEXT_PUBLIC_SITE_NAME!,
      images: post.metadata.images,
      type: "website",
      locale: "en",
    },
  };
  return metadata;
}

// const TagList = ({ tags, themeColor }: { tags: Tag[], themeColor: string }) => (
//   <div className="flex flex-wrap gap-2">
//     {tags.map((tag) => (
//       <Link href={`/blog/tag/${tag.slug}`} key={tag.id}>
//         <span
//           className="text-sm font-medium px-3 py-1 rounded-full transition-colors"
//           style={{
//             backgroundColor: lightenHexColor(themeColor, -20),
//             color: lightenHexColor(themeColor, 80),
//           }}
//         >
//           {tag.tagName}
//         </span>
//       </Link>
//     ))}
//   </div>
// );

export default async function PostPage({ params }: PageProps) {
    const slug = (await params).slug;
    const payload = await getPayload({ config });
    const postData = await payload.find({
        collection: "posts",
        where: {
            slug: { equals: slug },
        },
        depth: 8,
    });

    if (!postData || !postData.docs || !postData.docs[0] || !postData.docs[0].published) {
        notFound();
    }

    const post = postData.docs[0];
    const author = post.author;
    const themeColor = post.vision.themeColor || '#000000'; // Default to black if no theme color
    const tags = post.Tags;

    console.log(author);
    
    return (
        <div
            className="min-h-screen h-full w-full"
            style={{
                backgroundColor: lightenHexColor(themeColor, 95),
                // backgroundColor: "white",
            }}
        >
            <div
                className="h-64 md:h-80 w-full"
                style={{
                    backgroundImage: `linear-gradient(to bottom, ${themeColor}, ${lightenHexColor(themeColor, -40)})`,
                }}
            />
            <main className="px-4 md:px-6 py-8 md:py-12 max-w-4xl mx-auto">
                <article className="bg-white rounded-2xl shadow-2xl -mt-48 md:-mt-64 p-6 md:p-12">
                    <header className="mb-8">
                        <h1
                            className={cn(
                                "text-4xl md:text-6xl font-extrabold tracking-tight mb-4",
                                lato.className
                            )}
                            style={{ color: lightenHexColor(themeColor, -20) }}
                        >
                            {post.title}
                        </h1>
                        <div className="flex items-center space-x-4 text-gray-500 mb-4">
                            <div className="flex items-center space-x-2">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={author.avatar?.url} />
                                    <AvatarFallback>
                                        {(author.name as string).at(0)} 
                                    </AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{author.name}</span>
                            </div>
                            <span>•</span>
                            <time dateTime={post.createdAt}>
                                {new Date(post.createdAt).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </time>
                        </div>
                        {post.Tags && post.Tags.length > 0 && (
                            <TagList tags={post.Tags} themeColor={themeColor} />
                        )}
                    </header>

                    <div className="prose prose-lg max-w-none">
                        <RichTextRenderer data={post.content} />
                    </div>
                </article>
            </main>
        </div>
    );
}