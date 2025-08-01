"use server"

import { Article } from "@/types/article";

export async function get3Articles(): Promise<Article[]>{
    return [
        {
            title: "Donec interdum neque",
            img: "http://localhost:3000/restaurant2.jpg",
            introduction: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis in.",
        },{
            title: "Donec in felis.",
            img: "http://localhost:3000/restaurant2.jpg",
            introduction: "Phasellus auctor eu turpis id feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada.",
        },{
            title: "Nulla eu tincidunt.",
            img: "http://localhost:3000/restaurant2.jpg",
            introduction: "Phasellus eget ullamcorper sapien. Praesent tempus auctor pharetra. Duis sed finibus felis, a vulputate turpis.",
        },
    ];
}