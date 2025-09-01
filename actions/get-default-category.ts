"use server";

import { getPayload } from "payload";
import config from "@payload-config";

export async function getDefaultCategory() {
    const payload = await getPayload({config});
    const defaultCategorySlug = await payload.findGlobal({
        slug: "default-menu-category-slug",
        depth: 0,
    });
    if (!defaultCategorySlug) {
        throw new Error("Default category slug not found");
    } else {
        const category = await payload.findByID({
            collection: "categories",
            id: defaultCategorySlug.category,
        });
        if (!category) {
            throw new Error("Default category not found");
        }
        return category.slug;
    }
}