/* eslint-disable @typescript-eslint/no-explicit-any */

import { cn } from "@/lib/utils";
import { getPayload } from "payload";
import config from "@payload-config";
import { lato } from "@/lib/fonts";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { generateMetaDataFromURL } from "@/lib/generate-meta-data";

const payload = await getPayload({ config });
const aboutPageData = (await payload.findGlobal({
  slug: "about",
})) as { content: SerializedEditorState };

const metadata = await generateMetaDataFromURL("/about");

export async function generateMetadata() {
  return metadata;
}

export default async function AboutPage() {
  return (
    <div
      className={cn(
        "min-h-screen w-full",
        "flex flex-col items-center pt-28 pb-16 px-4",
        "bg-gradient-to-b from-slate-500 via-slate-50 to-slate-100"
      )}
    >
      {/* Title */}
      <h1
        className={cn(
          "text-6xl font-extrabold text-center tracking-wider",
          "bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent",
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
        <RichText
          data={aboutPageData.content}
          className={cn(
            "font-serif text-slate-800 leading-relaxed",
            "[&>h1]:text-4xl [&>h1]:font-bold [&>h1]:tracking-wide [&>h1]:pb-2 [&>h1]:pt-6",
            "[&>h2]:text-3xl [&>h2]:font-semibold [&>h2]:tracking-wide [&>h2]:py-1 [&>h2]:pl-0.5",
            "[&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:tracking-wide [&>h3]:py-1 [&>h3]:pl-1",
            "[&>p]:text-lg [&>p]:leading-8 [&>p]:tracking-normal [&>p]:text-justify [&>p]:indent-6",
            "[&>ul]:list-disc [&>ul]:pl-8 text-lg"
          )}
        />
      </div>
    </div>
  );
}
