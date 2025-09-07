import { anyone } from "@/payload-access/anyone";
import { authenticated } from "@/payload-access/authenticated";
import { revalidatePath } from "next/cache";
import { GlobalAfterChangeHook, GlobalConfig } from "payload";

const afterChange: GlobalAfterChangeHook = async ({ doc }) => {
  await revalidatePath('/');
}

export const MenuGridSize : GlobalConfig = {
    slug: "menu-grid-size",
    label: "(Landing Page) Menu Grid Size",
    fields: [
        {
            name: "width",
            type: "number",
            defaultValue: 3,
            required: true,
            validate: (value:unknown) => {
                if (value === undefined || value === null) {
                    return "Order is required.";
                }
                if (!Number.isInteger(value)) {
                    return "Value must be an integer";
                }
                if( value as number < 1 || value as number > 36) {
                    return "Invalid order value.";
                }
                return true;
            }
        },
        {
            name: "height",
            type: "number",
            defaultValue: 3,
            required: true,
            validate: (value:unknown) => {
                if (value === undefined || value === null) {
                    return "Order is required.";
                }
                if (!Number.isInteger(value)) {
                    return "Value must be an integer";
                }
                if( value as number < 1 || value as number > 36) {
                    return "Invalid order value.";
                }
                return true;
            }
        }
    ],
    access: {
        read: anyone,
        update: authenticated,
    },
    hooks: {
        afterChange: [afterChange]
    }
}