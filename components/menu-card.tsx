import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { lato } from "@/lib/fonts";
import Link from "next/link";
import Image from "next/image";
import { IMG } from "@/types/img";

interface Props{
    img: IMG
    buttonLabel: string
    redirectUrl: string
}

export default function MenuCard({ img, buttonLabel, redirectUrl }:Props){
    return (
        <div className={cn(
            "group",
            "relative",
            "w-full h-full",
            "p-3"
        )}>
            <div className={cn(
                "h-full w-full",
                "relative",
                "overflow-hidden",
                "rounded-2xl"
            )}>
                <Image 
                    placeholder="blur"
                    blurDataURL={img.blurDataURL}
                    alt={buttonLabel}
                    src={img.url}
                    fill
                    className={cn(
                        "w-full h-full",
                        "z-0",
                        "group-hover:scale-110",
                        "transition-all duration-500 ease-in-out",
                        "object-cover object-center",
                        "select-none"
                )} />
                
                <Button asChild type="button" className={cn(
                    "absolute inset-0",
                    "z-10",
                    "bg-white/80 hover:bg-red-500/80",
                    "text-gray-800 hover:text-white",
                    "transition-all duration-500 ease-in-out",
                    "h-15 w-50 md:h-10 md:w-33 lg:h-15 lg:w-50",
                    "px-5 py-3",
                    "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                )}>
                    <Link
                        href={redirectUrl}
                        className={cn(
                            lato.className,
                            "text-[22px] tracking-widest"
                        )}
                    >
                        {buttonLabel}
                    </Link>
                </Button>
            </div>
        </div>
    );
}