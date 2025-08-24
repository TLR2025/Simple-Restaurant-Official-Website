import { cn } from "@/lib/utils";
import { Review } from "@/types/review";
import { lato, pacifico, playWrite } from "@/lib/fonts";
import Image from "next/image";

interface Props {
    review: Review;
}

export default function ReviewCard({ review }: Props) {
    return (
        <div className={cn(
            "w-full lg:h-100",
            "bg-amber-50",
            "rounded-2xl",
            "drop-shadow-gray-50 shadow-md",
            "p-8",
            "m-2",
            "flex flex-col justify-between",
            "space-y-6"
        )}>
            <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-4">
                    <Image
                        src={review.avatarUrl}
                        alt={review.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                    <span className={cn(
                        "text-xl font-bold font-serif"
                    )}>
                        {review.name}
                    </span>
                </div>

                <p className={cn(
                    "text-sm md:text-[16px] lg:text-lg",
                    "text-left",
                    "indent-8",
                    "leading-7",
                    playWrite.className
                )}>
                    {review.comment}
                </p>
            </div>

            <div className="w-full text-right">
                <span className={cn(
                    "text-sm",
                    pacifico.className
                )}>
                    {review.dateAndPlace}
                </span>
            </div>
        </div>
    );
}
