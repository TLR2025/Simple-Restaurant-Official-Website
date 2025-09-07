import { authenticated } from "@/payload-access/authenticated";
import { revalidatePath } from "next/cache";
import { GlobalAfterChangeHook, GlobalConfig } from "payload";

const afterChange:GlobalAfterChangeHook = async() => {
    await revalidatePath("/about");
}

export const About:GlobalConfig = {
    slug: "about",
    label: "About",
    fields: [
        {
            name: "content",
            type: "richText",
            required: true,
        }
    ],
    hooks: {
        afterChange: [afterChange]
    },
    access: {
        read: authenticated,
        update: authenticated,
    }
}