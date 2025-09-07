import { authenticated } from "@/payload-access/authenticated";
import { createSlugField } from "@/payload-fields/slug";
import { CollectionConfig } from "payload";

export const User:CollectionConfig<"users"> = {
    slug: "users",
    fields: [
        {
            name: "username",
            label: "Username",
            type: "text",
            required: true,
            unique: true,
            hasMany: false,
            minLength: 3,
            validate: ((value: string | null | undefined) => {
                const regex = /^[a-zA-Z0-9-]+$/;
                if (!value || !regex.test(value)) {
                    throw new Error("Username must be alphanumeric and can include \"-\".");
                }
                return true;
            })
        },
        createSlugField("username"),
    ],
    access:{
        read: authenticated,
        create: authenticated,
        update: authenticated,
        delete: authenticated,
    },
    auth: true,
    admin: {
        useAsTitle: "username",
    } 
}