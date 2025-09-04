/* eslint-disable @typescript-eslint/no-explicit-any */

import { cn } from "@/lib/utils";
import { getPayload } from "payload";
import config from "@payload-config";
import { lato } from "@/lib/fonts";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { generateMetaDataFromURL } from "@/lib/generate-meta-data";
import RichTextRenderer from "@/components/posts/rich-text-renderer";

const payload = await getPayload({ config });
const aboutPageData = (await payload.findGlobal({
  slug: "about",
})) as { content: SerializedEditorState };

const metadata = await generateMetaDataFromURL("/about");

export async function generateMetadata() {
  return metadata;
}

export default async function AboutPage() {
  // console.log(aboutPageData.content.root.children);
  return (
    <div
      className={cn(
        "min-h-screen w-full",
        "flex flex-col items-center pt-28 pb-16 px-4",
        "bg-gradient-to-b from-slate-500 via-slate-50 to-slate-200"
      )}
    >
      {/* Title */}
      <h1
        className={cn(
          "text-6xl font-extrabold text-center tracking-wider",
          "bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent",
          "text-shadow-md text-shadow-amber-400",
          lato.className
        )}
      >
        OUR STORY
      </h1>

      {/* Content Card */}
      <div
        className={cn(
          "mt-12 w-full max-w-3xl",
          "rounded-2xl bg-white shadow-lg",
          "p-8 space-y-6"
        )}
      >
        <RichTextRenderer data={aboutPageData.content} />
      </div>
    </div>
  );
}
