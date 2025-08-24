"use client"

import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Skeleton1 from "./skeleton1";
import { Review } from "@/types/review";
import ReviewCard from "./review-card";

interface Props{
    reviews : Review[]|null
}

export default function Slide6Carousel( { reviews } : Props ){
    if(reviews == null){
        return (
            <div className={cn(
                "w-full h-full",
                "grid grid-cols-1 md:grid-cols-2 grid-rows-2",
                "gap-6"
            )}>
                {[1,2,3,4].map((_,index)=>{
                    return (
                        <Skeleton1 key={index} className={cn(
                            "h-full w-full",
                            "rounded-2xl"
                        )} />
                    );
                })}
            </div>
        );
    }
    return (
        <>
            <div className={cn(
                "h-full w-full",
                "hidden lg:block"
            )}>
                <Carousel
                    opts={{ align: "start", loop: true, duration: 200 }}
                    plugins={[
                        Autoplay({
                        delay: 2500,
                        stopOnInteraction: false,
                        stopOnMouseEnter: false, 
                    }),]}
                    className={cn(
                        "w-full h-full",
                    )}
                >
                    <CarouselContent>
                        {reviews.map((item, index)=>{
                            return (
                                <CarouselItem key={index} className={cn(
                                    "px-4",
                                    "basis-1/3",
                                    "select-none",
                                )}>
                                    <ReviewCard review={item} />
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                </Carousel>
            </div>

            <div className={cn(
                "h-full w-full",
                "block lg:hidden"
            )}>
                <Carousel
                    orientation="vertical"
                    opts={{ align: "start", loop: true }}
                    plugins={[
                        Autoplay({
                        delay: 3000,
                        stopOnInteraction: false,
                        stopOnMouseEnter: false, 
                    }),]}
                    className={cn(
                        "w-full h-full",
                    )}
                >
                    <CarouselContent className={cn(
                        "h-[60vh]"
                    )}>
                        {reviews.map((item, index)=>{
                            return (
                                <CarouselItem key={index} className={cn(
                                    "px-4",
                                    "select-none",
                                )}>
                                    <ReviewCard review={item} />
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                </Carousel>
            </div>
        </>
    );
}