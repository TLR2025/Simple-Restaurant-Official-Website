import { authenticated } from "@/payload-access/authenticated";
import { revalidatePath } from "next/cache";
import { CollectionAfterChangeHook, CollectionConfig } from "payload";

const afterChange:CollectionAfterChangeHook = ({ doc, previousDoc }) => {
    revalidatePath(doc.relativeURL);
    if(previousDoc && previousDoc.relativeURL)
        revalidatePath(previousDoc.relativeURL);
}

export const Metadata : CollectionConfig = {
    slug: "metadatas",
    fields: [
        {
            name: "relativeURL",
            label: "Relative URL",
            type: "text",
            admin: {
                description: "The relative path of the page, start with '/'.",
            },
            required:true,
        },
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required:true,
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textarea',
            required:true,
        },
        {
            name: 'keywords',
            label: 'Keywords',
            type: 'array', 
            fields: [
                {
                    name: "keyword",
                    label: "Keyword",
                    type: "text",
                }
            ]
        },
        {
            name: "images",
            label: "Images",
            type: "array",
            fields: [
                {
                    name: "image",
                    label: "Image",
                    type: "upload",
                    relationTo: "media",
                }
            ]
        }
    ],
    hooks: {
        afterChange: [afterChange]
    },
    admin: {
        useAsTitle: "title",
    },
    access: {
        read: authenticated,
        create: authenticated,
        update: authenticated,
        delete: authenticated,
    }
}