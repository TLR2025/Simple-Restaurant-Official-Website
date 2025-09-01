import { useVisibility } from "@/hooks/use-visibility";
import { cn } from "@/lib/utils";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Props{
    containerRef: RefObject<HTMLElement | null>
}

export default function Slide3Bg(props:Props){
    const ref = props.containerRef;
    const isVisible = useVisibility(ref, {rootMargin: "100px"});
    const [top, setTop] = useState("0px");
    const handleScrollUpdate = useCallback(()=>{
        if(!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        // console.log(Math.min(-rect.y/2-20, 80));
        setTop(`${Math.min(-rect.y/2-20, 80)}px`);
    }, []);
    const count = useRef(0);

    useEffect(()=>{
        if(!isVisible)
            return;
        let ticking = false;
        const onScroll = ()=>{
            if(!ticking){
                count.current ++;
                if(count.current<=3)
                    return;
                count.current = 0;
                ticking = true;
                requestAnimationFrame(()=>{
                    handleScrollUpdate();
                    ticking = false;
                })
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return ()=>{
            window.removeEventListener('scroll', onScroll);
        };
    }, [isVisible]);

    return (
        <div className={cn(
            "absolute bottom-0 left-0 right-0",
            "h-[800px] w-full",
            "transition-all duration-200 ease-out",
            "will-change-scroll",
            "-z-50"
        )} style={{top: top}}>
            <Image placeholder="blur" alt="" src="/restaurant_outlooking.jpg" className={cn(
                "w-full h-full",
                "object-cover object-center",
            )} />  
        </div>
    );
}