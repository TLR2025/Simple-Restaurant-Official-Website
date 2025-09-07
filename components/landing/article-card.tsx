import { lato } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Article } from "@/types/article";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

interface Props{
    article: Article,
    className: string,
}

export default function ArticleCard({ article, className }: Props){
    return (
        <div className={cn(
            className,
            "flex flex-col space-y-4 items-center justify-center",
            "p-6 md:p-0"
        )}>
            <div className={cn(
                "w-full aspect-[16/9]",
                "overflow-hidden",
                "rounded-2xl"
            )}>
                <Link href={article.href}>
                    <Image
                        width={5596}
                        height={3731}
                        src={article.img}
                        placeholder="empty"
                        alt="image"
                        className={cn(
                            "object-cover object-center",
                            "w-full h-full",
                            "transition-all duration-700 ease-in-out",
                            "hover:scale-110"
                        )}
                    />
                </Link>
            </div>

            <div className={cn(
                lato.className,
                "w-full h-auto md:h-16 lg:h-8 md:tracking-widest font-normal",
                "text-xl text-black hover:text-red-500 text-center md:text-left",
                "transition-all duration-500 ease-in-out"
            )}>
                <Link href={article.href}>
                    {article.title.toUpperCase()}
                </Link>
            </div>

            <div className={cn(
                "font-serif w-full h-auto md:h-32 lg:h-20 md:tracking-wide",
                "text-[16px] text-gray-500 text-center md:text-left",
            )}>
                <p>
                    {article.introduction}
                </p>
            </div>

            <Button asChild variant="ghost" className={cn(
                lato.className,
                "text-[16px] font-normal tracking-widest",
                "text-gray-600 hover:text-red-500 hover:bg-transparent",
                "transition-all duration-500 ease-in-out"
            )}>
                <Link href={article.href}>
                    SEE MORE   →
                </Link>
            </Button>
        </div>
    );
}