import { lato, meowScript } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Slide1BG from "./slide1-bg";
import { Button } from "../ui/button";
import { MENU_LINK } from "@/lib/links";
import Link from "next/link";

export default function Slide1(){
    return (
        <div className={cn(
            "w-full h-screen",
            "flex flex-col",
            "space-y-10",
            "relative overflow-hidden",
        )}>
            <Slide1BG className={cn(
                "absolute inset-0",
                "w-full h-full",
                "brightness-80 blur-[2px]",
                "object-cover object-center",
            )}/>
            
            <div className={cn(
                "h-full",
                "flex flex-col",
                "items-center justify-center",
                "space-y-4"
            )}>
                <div 
                    // initial={{ translateY: -50, opacity: 0 }} 
                    // animate={{ translateY: 0, opacity: 100 }}
                    // transition={{ duration: 1, ease: "easeOut" }}
                >
                    <p className={cn(
                        "w-full",
                        "text-7xl text-center text-white tracking-wide",
                        meowScript.className,
                    )}>
                        Welcome to
                    </p>
                </div>

                <div 
                    // initial={{ translateY: 50, opacity: 0 }} 
                    // animate={{ translateY: 0, opacity: 100 }}
                    // transition={{ duration: 1, ease: "easeOut" }}
                >
                    <p className={cn(
                        "w-full",
                        "text-8xl text-center text-white tracking-widest font-bold",
                        lato.className
                    )}>
                        TAVO PLACE
                    </p>
                </div>

                <div 
                    // initial={{ translateY: 50, opacity: 0 }} 
                    // animate={{ translateY: 0, opacity: 100 }}
                    // transition={{ duration: 1, ease: "easeOut" }}
                    className="pt-4 pb-6"
                >
                    <Button asChild className={cn(
                        "bg-white text-red-600 hover:bg-red-500 hover:text-white",
                        "text-sm",
                        "w-34 h-10",
                        "transition-all duration-300 ease-in-out",
                    )}>
                        <Link href={MENU_LINK}>
                            LOOK MENU
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}