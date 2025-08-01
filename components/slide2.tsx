import { lato, pacifico } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Slide2BG from "./slide2-bg";
import LinkButton from "./link-button";

export default function Slide2(){
    return (
        <div className={cn(
            "w-full h-screen",
            "flex flex-col md:flex-row items-center justify-center",
            "px-8",
            "space-y-4",
            "relative"
        )}>

            <Slide2BG />

            <div className={cn(
                "md:w-1/2 h-auto",
                "flex flex-col items-center justify-center",
                "space-y-2"
            )}>
                <div className={cn(
                    pacifico.className,
                    "text-red-500 text-3xl text-center"
                )}>
                    Italian Restaurant
                </div>

                <div className={cn(
                    lato.className,
                    "text-black text-5xl text-center tracking-widest font-bold"
                )}>
                    WELCOME
                </div>

                <div className={cn(
                    "font-serif w-80 lg:w-128 tracking-wide",
                    "pt-8",
                    "text-center text-[16px] text-gray-500"
                )}>
                    <p>
                        Aliquam ut gravida ligula. Curabitur et velit viverra, hendrerit libero a, sodales leo. Vivamus vitae gravida nibh. Suspendisse tempor molestie tortor, eu laoreet libero tincidunt id. Vestibulum augue dolor, pharetra dictum mattis at, aliquam sit amet ipsum. Nulla ut orci et libero accumsan ultricies. Cras consectetur elit eu convallis maximus.
                    </p>
                </div>

                <LinkButton label="OUR STORY" className={cn(
                    "w-36",
                    "text-[16px] text-gray-500 font-sans tracking-wider",
                    "hover:bg-transparent hover:text-red-500",
                    "transition-all duration-500 ease-in-out",
                    "pt-4"
                )} />

            </div>

            <div className={cn(
                "hidden md:flex md:w-1/2 md:h-auto",
                "md:items-center md:justify-center",
                "select-none"
            )}>
                <div className={cn(
                    "w-[390px] h-[390px]",
                    // "md:mr-4",
                    "overflow-hidden", 
                    "rounded-4xl"
                )}>
                    <img 
                        src="/dessert.jpg" 
                        alt="dessert" 
                        className={cn(
                            "object-cover object-center",
                            "w-full h-full",
                            "transition-all duration-700 ease-in-out",
                            "hover:scale-110"
                        )} 
                    />
                </div>
            </div>
            
        </div>
    );
}