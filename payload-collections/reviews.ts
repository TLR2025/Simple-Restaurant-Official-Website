import { revalidatePath } from "next/cache";
import { CollectionAfterChangeHook, CollectionConfig } from "payload";

const afterChange: CollectionAfterChangeHook = async ({ doc }) => {
    await revalidatePath('/');
}

export const Review : CollectionConfig<"reviews"> = {
    slug: "reviews",
    fields: [
        {
            name:  "name",
            label: "Name",
            type: "text",
            required: true,
            minLength: 2,
            maxLength: 16,
        },
        {
            name: "avatar",
            label: "Avatar",
            type: "upload",
            relationTo: "avatars",
            required: true,
        },
        {
            name: "dateAndPlace",
            label: "Date and Place",
            type: "text",
            required: true,
            minLength: 5,
            maxLength: 32,
        },
        {
            name: "comment",
            label: "Comment",
            type: "textarea",
            required: true,
            minLength: 10,
            maxLength: 256,
        }
    ],
    admin: {
        useAsTitle: "name",
    },
    hooks: {
        afterChange: [afterChange],
    }
}