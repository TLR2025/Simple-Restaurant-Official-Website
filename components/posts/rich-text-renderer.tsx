import { cn } from "@/lib/utils";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText, SerializedLexicalNodeWithParent } from "@payloadcms/richtext-lexical/react";
import { jsxConverter } from "./jsx-converter";

export default function RichTextRenderer({ data }:{data:SerializedEditorState<SerializedLexicalNodeWithParent>}){
    return (
        <RichText
          converters={jsxConverter}
          data={data}
          className={cn(
            "font-serif text-slate-800 leading-relaxed",
            "[&>h1]:text-4xl [&>h1]:font-bold [&>h1]:tracking-wide [&>h1]:pb-2 [&>h1]:pt-6",
            "[&>h2]:text-3xl [&>h2]:font-semibold [&>h2]:tracking-wide [&>h2]:py-1 [&>h2]:pl-0.5",
            "[&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:tracking-wide [&>h3]:py-1 [&>h3]:pl-1",
            "[&>p]:text-lg [&>p]:leading-8 [&>p]:tracking-normal [&>p]:text-justify [&>p]:indent-6 [&>p]:py-2",
            "[&>ul]:list-disc [&>ul]:pl-8 text-lg"
          )}
        />
    );
}