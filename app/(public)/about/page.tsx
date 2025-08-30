/* eslint-disable @typescript-eslint/no-explicit-any */

import { cn } from "@/lib/utils";
import { getPayload } from "payload";
import config from "@payload-config";
import { lato } from "@/lib/fonts";
import { RichText } from '@payloadcms/richtext-lexical/react';
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';

const payload = await getPayload({config});
const aboutPageData = await payload.findGlobal({
    slug: "about",
}) as {content:SerializedEditorState};

export default async function AboutPage() {
    return (
        <div className={cn(
            "pt-28",
            "flex flex-col items-center justify-center space-y-8",
            "bg-gradient-to-b from-amber-200 to-white"
        )}>
            <h1 className={cn(
                "text-6xl font-bold tracking-widest text-center",
                "text-slate-800",
                lato.className
            )}>
                {/* {aboutPageData.meta.title } */}
                ABOUT US
            </h1>
            
            <RichText data={aboutPageData.content} className={cn(
                "font-mono text-slate-800",
                "leading-relaxed px-8 pb-8",
                "[&>h1]:text-4xl [&>h1]:font-bold [&>h1]:tracking-wide [&>h1]:text-left [&>h1]:pb-2 [&>h1]:pt-6",
                "[&>h2]:text-3xl [&>h2]:font-bold [&>h2]:tracking-wide [&>h2]:text-left [&>h2]:py-1 [&>h2]:pl-0.5",
                "[&>h3]:text-2xl [&>h3]:font-bold [&>h3]: tracking-wide [&>h3]:text-left [&>h3]:pl-1",
                "[&>p]:text-md [&>p]:tracking-normal [&>p]:text-left [&>p]:pl-3 [&>p]:indent-8",
                "[&>ul]:list-disc [&>ul]:pl-8 text-md"
            )} />
        </div>
    );
}