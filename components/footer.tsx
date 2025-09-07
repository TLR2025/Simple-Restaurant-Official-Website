import { lato } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { GiPositionMarker } from 'react-icons/gi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { getPayload } from "payload";
import config from "@payload-config";

export default async function Footer(){
    const payload = await getPayload({config});
    const footerData = await payload.findGlobal({
        slug: "footer-data",
    });
    // console.log(footerData);
    return (
        <div className={cn(
            "w-full h-auto",
            "px-8 md:px-24 py-8 md:py-14",
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
                            <span className="text-left">{footerData.contact.address}</span>
                        </div>

                        <div className={cn(
                            "flex space-x-4 items-center"
                        )}>
                            <div className="w-4 h-4">
                                <BsFillTelephoneFill size={16} />
                            </div>
                            <span className="text-left">{footerData.contact.phoneNumber}</span>
                        </div>

                        <div className={cn(
                            "flex space-x-4 items-center"
                        )}>
                            <div className="w-4 h-4">
                                <AiOutlineMail size={16} />
                            </div>
                            <span className="text-left">{footerData.contact.email}</span>
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
                        {footerData.openingTimes.map((it:{id:string, content:string}, index:number)=>(
				<span key={index}>{it.content}</span>
			))}
                    </div>
                </div>
        </div>
    );
}
