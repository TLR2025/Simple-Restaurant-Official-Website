"use client"

import { lato, pacifico } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Slide3Bg from "./slide3-bg";
import { useRef } from "react";

export default function Slide3(){
    const containerRef = useRef(null);
    return (
        <div ref={containerRef} className={cn(
            "w-full h-[50vh] overflow-hidden",
            "relative"
        )} >

            {/* <Slide3Bg containerRef={containerRef} /> */}

            <div className={cn(
                "w-full h-full",
                "flex flex-col items-center justify-center",
                "space-y-4",
            )}>
                <p className={cn(
                    pacifico.className,
                    "text-4xl text-red-600"
                )}>Discover</p>

                <div className={cn(
                    lato.className,
                    "text-white text-7xl text-center tracking-widest font-bold",
                    "pb-8"
                )}>
                    PATO SPACE
                </div>
            </div>
        </div>
    );
}