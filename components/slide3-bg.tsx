import { cn } from "@/lib/utils";
import { Parallax } from "react-scroll-parallax";

export default function Slide3Bg(){
    return (
        <Parallax 
            className={cn(
                "absolute inset-0 -z-10",
                "w-full h-full",
                "select-none",
            )}
            translateY={[-80, 20]}
            shouldAlwaysCompleteAnimation={true}
            easing={[0, 0, 1, 1]}
        >
            <img loading="eager" alt="outlooking" src="/restaurant_outlooking.jpg" className={cn(
                "w-full h-full",
                "object-contain",
                "select-none",
                "scale-280"
            )} />
        </Parallax>
    );
}