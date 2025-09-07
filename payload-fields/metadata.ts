import { Field } from "payload";

export const metadata:Field = {
    name: "metadata",
    type: "group",
    fields: [
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
    admin: {
        position: "sidebar",
    }
}