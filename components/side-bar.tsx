import { cn } from "@/lib/utils";

interface SideBarProps{
    className: string
}

export default function SideBar({ className }: SideBarProps){
    return (
        <div className={cn(
            "w-24"
        )}>
            Hello.
        </div>
    );
}