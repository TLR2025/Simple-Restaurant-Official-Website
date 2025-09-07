import { revalidateAllPages } from "@/lib/revalidate-all-pages";
import { anyone } from "@/payload-access/anyone";
import { authenticated } from "@/payload-access/authenticated";
import { GlobalAfterChangeHook, GlobalConfig } from "payload";

const afterChange:GlobalAfterChangeHook = async ()=>{
    await revalidateAllPages();
}

export const SocialLinks:GlobalConfig = {
    slug: "social-links",
    fields: [
        {
            name: "instagram",
            label: "Instagram Link",
            type: "text",
        },
        {
            name: "facebook",
            label: "Facebook Link",
            type: "text",
        },
        {
            name: "twitter",
            label: "Twitter Link",
            type: "text",
        }
    ],
    access: {
        read: anyone,
        update: authenticated,
    },
    hooks: {
        afterChange: [afterChange],
    }
}