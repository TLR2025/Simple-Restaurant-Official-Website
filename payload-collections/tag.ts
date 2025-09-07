import { authenticated } from "@/payload-access/authenticated";
import { createSlugField } from "@/payload-fields/slug";
import { CollectionConfig } from "payload";

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
    }
}