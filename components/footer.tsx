import { lato } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { GiPositionMarker } from 'react-icons/gi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

export default function Footer(){
    return (
        <div className={cn(
            "w-full h-auto",
            "px-8 md:px-24 py-8 md:py-12",
            "flex flex-row",
            "space-x-10",
            "items-start justify-between",
            "bg-gray-900",
        )}>
                <div className={cn(
                    "flex flex-col space-y-8",
                    "text-left",
                    "w-1/2"
                )}>
                    <div className={cn(
                        "text-lg text-white tracking-widest",
                        "text-left",
                        lato.className
                    )}>
                        CONTACT US
                    </div>

                    <div className={cn(
                        "text-[16px] text-gray-400 tracking-wider",
                        "flex flex-col space-y-5",
                        "items-start justify-start text-left",
                        lato.className
                    )}>
                        <div className={cn(
                            "flex space-x-4 items-center"
                        )}>
                            <div className="w-4 h-4">
                                <GiPositionMarker size={20} />
                            </div>
                            <span className="text-left">8th floor, 2321  West Virginia Avenue, Albany, New York</span>
                        </div>

                        <div className={cn(
                            "flex space-x-4 items-center"
                        )}>
                            <div className="w-4 h-4">
                                <BsFillTelephoneFill size={16} />
                            </div>
                            <span className="text-left">{"(+1) 96 123 456"}</span>
                        </div>

                        <div className={cn(
                            "flex space-x-4 items-center"
                        )}>
                            <div className="w-4 h-4">
                                <AiOutlineMail size={16} />
                            </div>
                            <span className="text-left">{"example@example.com"}</span>
                        </div>
                    </div>
                </div>

                <div className={cn(
                    "flex flex-col space-y-8",
                    "text-left",
                    "w-1/2"
                )}>
                    <div className={cn(
                        "text-lg text-white tracking-widest",
                        "text-left",
                        lato.className
                    )}>
                        OPENING TIMES
                    </div>

                    <div className={cn(
                        "text-[16px] text-gray-400 tracking-wider",
                        "flex flex-col space-y-2",
                        "items-start justify-start text-left",
                        lato.className
                    )}>
                        <span>
                            09:00 - 24:00
                        </span>

                        <span>
                            Every Day
                        </span>
                    </div>
                </div>
        </div>
    );
}