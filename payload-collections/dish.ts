import { createSlugField } from "@/payload-fields/slug";
import { revalidatePath } from "next/cache";
import { CollectionAfterChangeHook, CollectionConfig } from "payload";

const afterChange: CollectionAfterChangeHook = async ({ doc, req }) => {
    const categoryId : undefined|number[] = doc.category;
    if(!categoryId)
        return;
    for (const Id of categoryId) {
        const categorySlug = await req.payload.findByID({
            collection: "categories",
            id: Id,
        })
        await revalidatePath(`/menu/${categorySlug.slug}`);
    }
}


export const Dish:CollectionConfig<"dishes"> = {
    slug: "dishes",
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
            unique: true,
            label: "Dish Name",
        },
        {
            name: "description",
            type: "textarea",
            required: true,
            label: "Description",
        },
        {
            name: "price",
            type: "number",
            required: true,
            label: "Price",
            min: 0,
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true,
            label: "Image",
        },
        {
            name: "category",
            type: "relationship",
            relationTo: "categories",
            hasMany: true,
            required: true,
        },
        {
            name: "isAvailable",
            type: "checkbox",
            defaultValue: true,
            label: "Available",
        },
        createSlugField("name"),
    ],
    admin: {
        defaultColumns: ["image", "name", "price", "category", "isAvailable"],
    },
    hooks: {
        afterChange: [afterChange],
    },
    access: {
        read: () => true,
    }
}