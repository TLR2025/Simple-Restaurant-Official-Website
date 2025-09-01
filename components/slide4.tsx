import { cn } from "@/lib/utils";
import { Article } from "@/types/article";
import ArticleCard from "./article-card";
import Slide4BG from "./grid-bg";

export default function Slide4(){
    function get3Articles(): Article[]{
        return [
            {
                title: "Donec interdum neque",
                img: "/steak1.jpg",
                introduction: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis in.",
                href: "https://blog.example.com/1",
            },{
                title: "Donec in felis",
                img: "/restaurant1.jpg",
                introduction: "Phasellus auctor eu turpis id feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada.",
                href: "https://blog.example.com/2",
            },{
                title: "Nulla eu tincidunt",
                img: "/steak2.jpg",
                introduction: "Phasellus eget ullamcorper sapien. Praesent tempus auctor pharetra. Duis sed finibus felis, a vulputate turpis.",
                href: "https://blog.example.com/3",
            },
        ];
    }
    const articles = get3Articles();
    return (
        <div className={cn(
            "w-full h-full m-0 p-0",
            "relative"
        )}>
            <Slide4BG />

            <div className={cn(
                "w-full h-auto md:h-screen",
                "flex flex-col md:flex-row",
                "md:px-8 md:space-x-6"
            )}>
                {articles.map((value, index)=>{return (
                    <ArticleCard article={value} className="w-full h-auto" key={index} />
                )})}
            </div>
        </div>

    );
}