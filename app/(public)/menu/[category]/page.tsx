/* eslint-disable @typescript-eslint/no-explicit-any */
import CategorySelector from "@/components/menu/category-selector";
import { cn } from "@/lib/utils";
import { getPayload } from "payload";
import config from "@payload-config";
import Dishes from "@/components/menu/dishes";

export default async function MenuPage(){
    const payload = await getPayload({ config });
    const categoriesData = await payload.find({
        collection: "categories",
        limit: 100,
        sort: "id",
    });
    const categories = categoriesData.docs as any[];
    const dishesData = await payload.find({
        collection: "dishes",
        limit: 999,
        sort: "id",
    });
    const dishes = dishesData.docs as any[];
    return (
        <div className={cn(
            "h-screen",
            "w-screen",
            "pt-28",
            "px-8",
            "pb-8",
        )}>
            <div className={cn(
                "flex items-center justify-center",
                "space-x-8",
                "w-full h-full",
                "bg-amber-100",
                "rounded-lg shadow-lg",
                "py-8"
            )}>
                <CategorySelector categories={categories} />
                <Dishes dishes={dishes} />
            </div>
        </div>
    );
}