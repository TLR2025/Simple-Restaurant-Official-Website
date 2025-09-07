import { cn } from "@/lib/utils";
import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";
import { lato } from "@/lib/fonts";
import RichTextRenderer from "@/components/posts/rich-text-renderer";
import { lightenHexColor } from "@/lib/lighten-hex-color";
import { Metadata } from "@/types/metadata";

interface PageProps {
  params: Promise<{ slug: string }>; 
}

export async function generateMetadata({params}:PageProps){
    const slug = (await params).slug;
    const payload = await getPayload({config});
    const postData = await payload.find({
        collection: "posts",
        where: {
            slug: {equals: slug}
        },
        depth: 8,
    });
    const res: Metadata = {
        title: postData.docs[0].metadata.title + " - " + process.env.NEXT_PUBLIC_SITE_NAME,
        description: postData.docs[0].metadata.description,
        keywords: (postData.docs[0].metadata.keywords as Array<{
            id: string,
            keyword: string,
        }>).map((v)=>v.keyword),
        openGragh: {
            title: postData.docs[0].metadata.title,
            description: postData.docs[0].metadata.description,
            url: process.env.NEXT_PUBLIC_SITE_URL + "/blog/" + slug,
            siteName: process.env.NEXT_PUBLIC_SITE_NAME!,
            images: postData.docs[0].metadata.images,
            type: "website",
            locale: "en",
        }
    };
    return res;
}

export default async function PostPage({params}:PageProps) {
    const slug = (await params).slug;
    const payload = await getPayload({config});
    const postData = await payload.find({
        collection: "posts",
        where: {
            slug: {equals: slug}
        },
        depth: 8,
    });
    if(!postData || !postData.docs || !postData.docs[0] || !postData.docs[0].published)
        notFound();
    const post = postData.docs[0];
    // console.log(post);
    return (
        <div className={cn(
            "pt-32 px-16 md:px-24 pb-16",
            "min-h-screen h-full",
            "flex flex-col items-center",
            // "bg-gradient-to-b from-slate-500 via-slate-50 to-slate-200",
        )} style={{
            backgroundImage:
            `linear-gradient(to bottom, ${post.vision.themeColor}, ${post.vision.themeColor}08, ${post.vision.themeColor}40)`,
        }}>
            {/* Title */}
            <h1
                className={cn(
                    "text-6xl font-extrabold text-center tracking-wider",
                    "text-shadow-md text-shadow-gray-600",
                    lato.className
                )}
                style={{
                    color: lightenHexColor(post.vision.themeColor, 80)
                }}
            >
                {post.title}
            </h1>
            <div
                className={cn(
                    "mt-12 w-full md:w-7/8",
                    "rounded-2xl bg-white shadow-lg",
                    "p-8 space-y-6"
                )}
            >
                <RichTextRenderer data={post.content} />
            </div>
        </div>
    );
}