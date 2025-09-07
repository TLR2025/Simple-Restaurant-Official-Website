import { getPayload } from "payload";
import config from "@payload-config";
import { revalidatePath } from "next/cache";

export async function revalidateAllPages() {
    const payload = await getPayload({config});
    const staticRoutes = [
        "/",
        "/menu",
        "/blog",
        "/about",
    ];
    // dynamicRoutes: /menu/category, /blog/slug, /dish/slug
    const dynamicRoutes:string[] = [];
    (await payload.find({
        collection: "categories",
        limit: 99,
        depth: 1,
    })).docs.map((category)=>{
        dynamicRoutes.push("/menu/"+category.slug);
    });
    (await payload.find({
        collection: "posts",
        limit: 999,
        depth: 1,
    })).docs.map((post)=>{
        dynamicRoutes.push("/blog/"+post.slug);
    });
    (await payload.find({
        collection: "dishes",
        limit: 999,
        depth: 1,
    })).docs.map((dish)=>{
        dynamicRoutes.push("/dish/"+dish.slug);
    });
    // console.log(dynamicRoutes);
    [...staticRoutes, ...dynamicRoutes].map((route)=>{
        revalidatePath(route);
    });
}