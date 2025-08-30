/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { meowScript, playWrite } from "@/lib/fonts";

export default function CategorySelector({ categories }: { categories: any[] }) {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const pathName = usePathname();
    const router = useRouter();
    useEffect(() => {
        const categorySlug = pathName.split("/")[2];
        const category = categories.find(cat => cat.slug == categorySlug);
        setSelectedCategory(category?.id || null);
    }, [pathName, categories]);
    return (
        <div className={cn(
            "flex flex-col items-center justify-center",
            "w-auto h-full px-8",
            "space-y-4",
            "overflow-y-auto overflow-x-hidden",
        )}>
            <p className={cn(
                "text-md font-mono",
            )}>
                CATEGORIES:
            </p>

            {
                categories?.map((category:any) => (
                    <Button asChild key={category.id} className={cn(
                        "h-8 w-30",
                        "p-4",
                        selectedCategory != category.id ?
                            "bg-white text-gray-800 hover:bg-gray-200 hover:text-gray-800" :
                            "bg-red-400 text-white hover:bg-red-500 hover:text-white",
                        "rounded-lg shadow-md",
                        "transition-all duration-200 ease-in-out",
                        "font-mono"
                    )}>
                        <Link href={`/menu/${category.slug}`} >
                            {category.name}
                        </Link>
                    </Button>
                ))
            }
        </div>
    );
}