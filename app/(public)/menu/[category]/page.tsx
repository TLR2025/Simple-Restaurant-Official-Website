/* eslint-disable @typescript-eslint/no-explicit-any */
import CategorySelector from "@/components/menu/category-selector";
import { cn } from "@/lib/utils";
import { getPayload } from "payload";
import config from "@payload-config";
import Dishes from "@/components/menu/dishes";
import Image from "next/image";
import { Metadata } from "@/types/metadata";

interface PageProps {
  params: Promise<{ category: string }>; 
}

const payload = await getPayload({ config });

export async function generateMetadata() {
    return {
        title: "Menu - " + process.env.NEXT_PUBLIC_SITE_NAME,
    } as Metadata;
}

export default async function MenuPage({ params }: PageProps){
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
    const category = (await params).category;
    const currentCategoryData = categories.find((c) => c.slug === category);
    // console.log(currentCategoryData);
    return (
        <div className={cn(
            "h-screen w-screnn",
            "pt-28 px-8 pb-8",
            "relative",
            "overflow-hidden"
        )}>
            <div className={cn(
                "absolute inset-0",
                "-z-50",
                "h-full w-full",
                "overflow-hidden",
                "select-none"
            )}>
                <Image
                    fill
                    src={currentCategoryData.image.url}
                    alt={currentCategoryData.image.alt}
                    placeholder="blur"
                    blurDataURL={currentCategoryData.image.blurDataURL}
                    className={cn(
                        "object-cover object-center",
                    )}
                />
            </div>

            <div className={cn(
                "flex items-center justify-center",
                "space-x-8",
                "w-full h-full",
                "rounded-lg shadow-lg",
                "py-4",
                "bg-amber-100/90",
            )}>
                <CategorySelector categories={categories} />
                <Dishes dishes={dishes} />
            </div>
        </div>
    );
}