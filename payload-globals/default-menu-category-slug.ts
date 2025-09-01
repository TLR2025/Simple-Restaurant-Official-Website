import { revalidatePath } from "next/cache";
import { GlobalAfterChangeHook, GlobalConfig } from "payload";

const afterChange: GlobalAfterChangeHook = async ({ doc }) => {
  await revalidatePath('/menu');
}

export const DefaultMenuCategorySlug:GlobalConfig = {
    slug: "default-menu-category-slug",
    fields: [
        {
            name: "category",
            type: "relationship",
            relationTo: "categories",
            required: true,
            admin: {
                description: "When user visits /menu, this will be used to redirect them to the default category.",
            },
        }
    ],
    access: {
        read: () => true,
    },
    hooks: {
        afterChange: [afterChange],
    }
}