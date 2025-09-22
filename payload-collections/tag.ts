import { revalidateAllPages } from "@/lib/revalidate-all-pages";
import { authenticated } from "@/payload-access/authenticated";
import { createSlugField } from "@/payload-fields/slug";
import { CollectionAfterChangeHook, CollectionConfig } from "payload";

const afterChange:CollectionAfterChangeHook = async () => {
    await revalidateAllPages();
}

export const Tag:CollectionConfig = {
    slug: "tags",
    labels: {
        singular: "Tag",
        plural: "Tags",
    },
    fields: [
        {
            name: "tagName",
            label: "Tag name",
            type: "text",
        },
        createSlugField("tagName"),
    ],
    admin: {
        useAsTitle: "tagName",
    },
    access: {
        read: authenticated,
        create: authenticated,
        update: authenticated,
        delete: authenticated,
    },
    hooks: {
        afterChange: [afterChange],
    }
}