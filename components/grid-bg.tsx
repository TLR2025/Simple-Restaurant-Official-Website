import { cn } from "@/lib/utils";

export default function GridBg({className}:{className?:string}){
    return (
        <div className={cn(
            "absolute inset-0 -z-10",
            "bg-white",
            "h-full w-full",
            className
        )}>
            <div className={cn(
                "w-full h-full",
                "bg-[url('/grid.png')] bg-repeat bg-[length:20px_20px]",
                "opacity-20",
                "blur-xs"
            )} />
        </div>
    );
}