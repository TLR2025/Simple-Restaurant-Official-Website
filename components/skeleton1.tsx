import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

interface Props{
    className:string
}

export default function Skeleton1({ className } : Props){
    return (
        <div className={cn(
            className,
            "flex items-center space-x-4"
        )}>
            <Skeleton className="h-full aspect-square rounded-full" />
            <div className={cn(
                "space-y-2",
                "h-full w-full",
                "flex flex-col"
            )}>
                <Skeleton className="h-1/2 w-full" />
                <Skeleton className="h-1/2 w-full" />
            </div>
        </div>
    );
}