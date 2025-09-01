/* eslint-disable @typescript-eslint/no-explicit-any */
import { lato, pacifico } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import GridBg from "./grid-bg";
import Slide6Carousel from "./slide6-carousel";
import { Review } from "@/types/review";
import { getPayload } from "payload";
import config from "@payload-config";

export default async function Slide6(){
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews?limit=99`);
    const payload = await getPayload({ config });
    const data = await payload.find({
        collection: "reviews",
        limit: 99,
        sort: "id",
    });
    const reviews:Review[] = data.docs.map((review: any) => ({
        avatarUrl: review.avatar?.url || '',
        name: review.name || '',
        dateAndPlace: review.dateAndPlace || '',
        comment: review.comment || ''
    }));
    return (
        <div className={cn(
            "relative",
            "w-full h-screen",
            "p-12 md:py-24",
            "flex flex-col space-y-6"
        )}>
            <GridBg />

            <div className={cn(
                "w-full h-full",
                "flex flex-col items-center justify-center",
                "space-y-4",
            )}>
                <p className={cn(
                    pacifico.className,
                    "text-3xl text-red-600"
                )}>Review</p>

                <div className={cn(
                    lato.className,
                    "text-black text-5xl text-center tracking-[0.2em] font-bold",
                    "pb-8"
                )}>
                    CUSTOMERS SAY
                </div>

                <Slide6Carousel reviews={reviews} />
            </div>
        </div>
    );
}


{/*
                [
                    {
                        avatarUrl:"/David.jpeg",
                        name:"David",
                        dateAndPlace:"02/08/2025 - New York",
                        comment:"Etiam lacinia magna ex. Nullam et volutpat ipsum, id posuere justo. Suspendisse eu lorem imperdiet, rhoncus eros sed, lobortis neque. Cras bibendum tristique neque."
                    },
                    {
                        avatarUrl:"/Paco.jpeg",
                        name:"Paco",
                        dateAndPlace:"09/04/2025 - Madrid",
                        comment:"Curabitur bibendum turpis ut arcu sollicitudin venenatis. Etiam condimentum elit nisl, vel lobortis dui molestie ut. Phasellus a egestas tortor, id imperdiet orci."
                    },
                    {
                        avatarUrl:"/Edgar.jpeg",
                        name:"Edgar",
                        dateAndPlace:"19/07/2025 - California",
                        comment:"Pellentesque ac imperdiet dui, in aliquam elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                    },
                    {
                        avatarUrl: "/Anna.jpeg",
                        name: "Anna",
                        dateAndPlace: "15/05/2025 - Berlin",
                        comment: "Etiam congue, enim sit amet suscipit convallis, diam nulla sagittis eros, nec vestibulum mi ipsum eget dolor. Pellentesque porta, odio."
                    },
                    {
                        avatarUrl: "/Yuki.jpeg",
                        name: "Yuki",
                        dateAndPlace: "28/06/2025 - Tokyo",
                        comment: "Donec interdum odio vitae erat finibus, nec vestibulum nisl commodo. Nam ac nibh id erat tristique."
                    },
                    {
                        avatarUrl: "/Liam.jpeg",
                        name: "Liam",
                        dateAndPlace: "11/03/2025 - Toronto",
                        comment: "Aenean vitae augue leo. Quisque accumsan metus in sem fringilla lacinia. Proin ut purus id felis bibendum viverra sed in urna. Nulla."
                    },
                    {
                        avatarUrl: "/Sofia.jpeg",
                        name: "Sofia",
                        dateAndPlace: "22/08/2025 - Rome",
                        comment: "Suspendisse potenti. Nam feugiat varius congue. Nunc molestie, turpis et ultricies sollicitudin, purus odio ornare tortor, vel placerat sapien."
                    },
                    {
                        avatarUrl: "/Chen.jpeg",
                        name: "Chen",
                        dateAndPlace: "03/02/2025 - Shanghai",
                        comment: "Fusce quis nulla pellentesque, pellentesque sem vitae, cursus lectus. Sed."
                    }
                ]
                */}