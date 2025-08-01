import { cn } from "@/lib/utils";

export default function Slide2BG(){
    return (
        <div className={cn(
            "absolute inset-0 -z-10",
            "bg-[url('/grid.png')] bg-repeat bg-[length:20px_20px]",
            "opacity-20",
            "h-full w-full",
            "blur-xs"
        )} />
    );
}