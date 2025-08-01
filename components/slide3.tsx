"use client"

import { lato, pacifico } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Slide3Bg from "./slide3-bg";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

export default function Slide3(){
    return (
        <ParallaxProvider>
            <ParallaxBanner>
                <div className={cn(
                    "w-full h-[66vh] overflow-hidden",
                )}>
                    <div className={cn(
                        "absolute inset-0",
                        "w-full h-full",
                        "bg-[url('/restaurant_outlooking_blur.jpg')] bg-cover",
                        "-z-20"
                    )} />
                    <Slide3Bg />
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
            </ParallaxBanner>
        </ParallaxProvider>
    );
}