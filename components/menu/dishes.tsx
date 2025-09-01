/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { lato } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Dishes({dishes}: {dishes: any[]}) {
    // console.log("dishes", dishes);
    const pathName = usePathname();
    return (
        <div className={cn(
            "h-full w-3/4",
            "[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
        )}>
            <div className={cn(
                "h-full w-full",
                "overflow-y-scroll",
                "pr-4",
            )}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
                    {dishes
                    .filter((dish) => {
                        return (dish.category as Array<any & {slug: string}>).some(item => item.slug === pathName.split("/")[2]);
                    })
                    .map((dish) => (
                        <div
                            key={dish.id}
                            className={cn(
                                "bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-200 flex flex-col",
                                "rouded-md",
                            )}
                        >
                            <Link href={`/dish/${dish.slug}`} className="block relative aspect-[16/10]">
                                <Image
                                    width={dish.image.width}
                                    height={dish.image.height}
                                    src={dish.image.url}
                                    alt={dish.image.alt}
                                    className={cn(
                                        "object-cover w-full h-full rounded-t-xl",
                                        dish.isAvailable ? "" : "grayscale-75",
                                    )}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL={dish.image.blurDataURL}
                                />
                                <div className={cn(
                                    "absolute inset-0",
                                    "h-full w-full",
                                    "flex flex-col items-center justify-center",
                                    dish.isAvailable ? "hidden" : ""
                                )}>
                                    <p className={cn(
                                        "text-white",
                                        "text-2xl md:text-3xl font-bold",
                                        "text-center",
                                        "opacity-75",
                                        "lg:tracking-wider",
                                        lato.className
                                    )} style={{
                                        textShadow:
                                        '-2px -2px 0 #AAA, 2px -2px 0 #AAA, -2px 2px 0 #AAA, 2px 2px 0 #AAA'
                                    }}>
                                        UNAVAILABLE
                                    </p>
                                </div>
                            </Link>
                            <div className="p-4 flex-1 flex flex-col">
                                <Link
                                    href={`/dish/${dish.slug}`}
                                    className={cn(
                                        "text-lg font-semibold text-gray-900 hover:text-primary transition-colors",
                                        dish.isAvailable ? "" : "text-gray-500",
                                    )}
                                >
                                    {dish.name}
                                </Link>
                                <p className={cn(
                                    "text-gray-500 text-sm mt-2 flex-1",
                                    dish.isAvailable ? "" : "text-gray-400"
                                )}>
                                    {dish.description}
                                </p>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-primary font-bold text-base">
                                        ${dish.price}
                                    </span>
                                    <Link
                                        href={`/dish/${dish.slug}`}
                                        className="text-sm text-primary hover:underline"
                                    >
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}