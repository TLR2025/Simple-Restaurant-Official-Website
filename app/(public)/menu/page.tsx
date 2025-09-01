"use client";

import { getDefaultCategory } from "@/actions/get-default-category";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";

export default function MenuRootPage() {
    const router = useRouter();
    useEffect(() => {
        getDefaultCategory()
        .then(category => {
            if (category) {
                router.push(`/menu/${category}`)
            }
        });
    });
    return (
        <div className={cn(
            "w-full h-screen flex items-center justify-center",
        )}>
            <BarLoader width={400} height={6} />
        </div>
    );
}