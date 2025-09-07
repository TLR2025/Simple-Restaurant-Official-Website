import { revalidateAllPages } from "@/lib/revalidate-all-pages";
import { authenticated } from "@/payload-access/authenticated";
import { GlobalConfig } from "payload";

export const FooterData:GlobalConfig = {
    slug: "footer-data",
    fields: [
        {
            name: "contact",
            label: "Contact",
            type: "group",
            fields: [
                {
                    name: "address",
                    label: "Address",
                    type: "text",
                    required: true,
                },
                {
                    name: "phoneNumber",
                    label: "Phone Number",
                    type: "text",
                    required: true,
                },
                {
                    name: "email",
                    label: "Email",
                    type: "text",
                    required: true,
                },
            ]
        },
        {
            name: "openingTimes",
            label: "Opening Times",
            type: "array",
            admin: {
                description: "The items will be shown row by row.",
            },
            fields: [
                {
                    name: "content",
                    label: "Content",
                    type: "text",
                    required: true,
                }
            ]
        }
    ],
    hooks: {
        afterChange: [async ()=>{revalidateAllPages()}]
    },
    access: {
        read: authenticated,
        update: authenticated,
    }
}