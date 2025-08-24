import { cn } from "@/lib/utils";

export default function FixedBg(){
    return (
        <div className={cn(
            "fixed inset-0",
            "w-full h-full",
            "bg-[url('/restaurant_outlooking.jpg')] bg-cover",
            "-z-30"
        )} />
    );
}
