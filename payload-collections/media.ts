import { createSlugField } from "@/payload-fields/slug";
import { CollectionConfig } from "payload";
import { fileURLToPath } from "url";
import path from "path";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename); // Current directory of this file

async function urlToBase64(url:string): Promise<string> {
    const res = await fetch(url);

    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const mime = res.headers.get("content-type") || "image/jpeg";
    return `data:${mime};base64,${buffer.toString("base64")}`;
}


export const Media : CollectionConfig<"media"> = {
    slug: "media",
    fields: [
        {
            name: "alt",
            type: "text",
            required: true,
            unique: true,
        },
        createSlugField("alt"),
        {
            name: "blurDataURL",
            type: "text",
            label: "Blur Base64",
            admin: { 
                readOnly: true,
                description: "This field is automatically generated.",
            },
        },
    ],
    upload: {
        staticDir: path.resolve(dirname, '../public/media'),
        mimeTypes: ['image/*'],
        imageSizes: [
            {
                name: "thumbnail",
                width: 16,
            },
        ],
        skipSafeFetch: true,
    },
    admin: {
        useAsTitle: "alt",
        defaultColumns: ["filename", "alt", "createdAt"],
    },
    access: {
        read: () => true,
    },
    hooks: {
        afterChange: [
            async ({ doc, req, operation }) => {
                if (req.context?.skipBlurUpdate) return;

                const thumbnailUrl = doc.sizes?.thumbnail?.url;
                // console.debug(thumbnailUrl);
                if (thumbnailUrl && !doc.blurDataURL) {
                    const blurDataURL = await urlToBase64(
                        thumbnailUrl
                    );

                    await req.payload.update({
                        req: req,
                        collection: "media",
                        id: doc.id,
                        data: { blurDataURL: blurDataURL },
                        context: { skipBlurUpdate: true },
                    });
                }
            },
        ],
    },
}