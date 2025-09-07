import { lato, pacifico } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import MenuGrid from "./menu-grid";

export default function Slide5(){
    return (
        <div className={cn(
            "w-full min-h-screen md:h-200vh",
            "bg-amber-100",
            "p-12 md:p-24",
            "flex flex-col space-y-6"
        )}>
            <div className={cn(
                "w-full h-full",
                "flex flex-col items-center justify-center",
                "space-y-4",
            )}>
                <p className={cn(
                    pacifico.className,
                    "text-3xl text-red-600"
                )}>Discover</p>

                <div className={cn(
                    lato.className,
                    "text-black text-5xl text-center tracking-[0.2em] font-bold",
                    "pb-8"
                )}>
                    OUR MENU
                </div>

                <MenuGrid />
            </div>
        </div>
    );
}