import { createSlugField } from "@/payload-fields/slug";
import { revalidatePath } from "next/cache";
import { CollectionAfterChangeHook, CollectionConfig } from "payload";

const afterChange: CollectionAfterChangeHook = async ({ doc }) => {
    await revalidatePath('/');
    await revalidatePath('/menu')

    if (doc.slug) {
        await revalidatePath(`/menu/${doc.slug}`)
    }
}


export const Category : CollectionConfig<"categories"> = {
    slug: "categories",
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
            unique: true,
            label: "Category Name",
        },
        createSlugField("name"),
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true,
            label: "Image",
        },
        {
            name: "showInLandingPage",
            type: "checkbox",
            defaultValue: false,
            label: "Show in Landing Page",
            admin: {
                position: "sidebar",
            }
        },
        {
            name: "order",
            type: "number",
            label: "Order",
            required: true,
            min: 1,
            max: 100,
            validate: (value:unknown, { data }:{ data:any }) => {
                if (data?.showInLandingPage) {
                    if (value === undefined || value === null) {
                        return "Order is required.";
                    }
                    if (!Number.isInteger(value)) {
                        return "Value must be an integer";
                    }
                    if( value as number < 1 || value as number > 36) {
                        return "Invalid order value.";
                    }
                }
                return true;
            },
            admin: {
                condition: (data, siblingData) => {
                    return Boolean(data?.showInLandingPage);
                },
                position: "sidebar",
            },
        },
        {
            name: "size",
            type: "group",
            fields: [
                {
                    name: "width",
                    type: "number",
                    label: "Width",
                    required: true,
                    min: 1,
                    max: 12,
                    validate: (value:unknown, { data }:{ data:any }) => {
                        if (data?.showInLandingPage) {
                            if (value === undefined || value === null) {
                                return "Value is required.";
                            }
                            if (!Number.isInteger(value)) {
                                return "Value must be an integer";
                            }
                            if( value as number < 1 || value as number > 3) {
                                return "Width must be 1-3.";
                            }
                        }
                        return true;
                    },
                },
                {
                    name: "height",
                    type: "number",
                    label: "Height",
                    required: true,
                    min: 1,
                    max: 12,
                    validate: (value:unknown, { data }:{ data:any }) => {
                        if (data?.showInLandingPage) {
                            if (value === undefined || value === null) {
                                return "Value is required.";
                            }
                            if (!Number.isInteger(value)) {
                                return "Value must be an integer";
                            }
                            if( value as number < 1 || value as number > 3) {
                                return "Height must be 1-3.";
                            }
                        }
                        return true;
                    },
                }
            ],
            admin: {
                condition: (data, siblingData) => {
                    return Boolean(data?.showInLandingPage);
                },
                position: "sidebar",
            },
        }
    ],
    admin: {
        useAsTitle: "name",
    },
    access: {
        read: () => true,
    },
    hooks: {
        afterChange: [afterChange],
    }

}