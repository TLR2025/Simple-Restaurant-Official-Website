"use server";

import { getPayload } from "payload";
import config from "@payload-config";

export async function getDefaultCategory() {
    const payload = await getPayload({config});
    const categoryList = await payload.findGlobal({
        slug: "category-list",
        depth: 5,
    });
    // console.log(categoryList);
    if (!categoryList) {
        throw new Error("Default category slug not found");
    } else {
        return categoryList.categories[0].category.slug;
    }
}