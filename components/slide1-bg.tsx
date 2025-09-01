"use client"

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "@/public/steak1.jpg";
import img2 from "@/public/restaurant1.jpg";
import img3 from "@/public/steak2.jpg";

interface props{
    className: string
}

const images = [
    img1,
    img2,
    img3,
];

export default function Slide1BG({ className }: props){
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>

      <div className="absolute inset-0 h-full w-full bg-black -z-30" />

      {images.map((src, i) => (
        <Image
            placeholder="blur"
            key={i}
            src={src}
            className={cn(
                className,
                `transition-opacity duration-1000 ease-in-out
                ${i === index ? "opacity-100 -z-10" : "opacity-0 -z-20"}`,
                "select-none"
            )}
            alt={`Slide ${i + 1}`}
        />
      ))}
    </>

  )
}