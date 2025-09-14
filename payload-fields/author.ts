import { Field } from "payload";

export const author:Field = {
    name: "author",
    type: "group",
    fields: [
        {
            name: "avatar",
            type: "relationship",
            relationTo: "avatars",
            hasMany: false,
        },
        {
            name: "name",
            type: "text",
        },
        {
            name: "slug",
            type: "text",
        }
    ],
    admin: {
        hidden: true,
    },
    access: {
        update: ()=>false,
    }
}