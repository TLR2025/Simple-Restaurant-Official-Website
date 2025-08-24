import { cn } from "@/lib/utils";
import MenuCard from "./menu-card";
import { getPayload } from "payload";
import config from "@payload-config";
import { IMG } from "@/types/img";

interface Card{
    cSpan: number
    rSpan: number 
    img: IMG
    buttonLabel: string
    redirectUrl: string
}

export default async function MenuGrid(){
    const payload = await getPayload({config});
    const categories = await payload.find({
        collection: "categories",
        depth: 0,
        limit: 100,
    });
    const cards:Card[] = await Promise.all(categories.docs
    .filter((category)=>category.showInLandingPage)
    .sort((c1, c2)=>c1.order-c2.order)
    .map(async (category)=>{
        return {
            cSpan: category.size.width,
            rSpan: category.size.height,
            img: (await payload.findByID({
                collection: "media",
                id: category.image,
                depth: 0,
            })) as unknown as IMG,
            buttonLabel: category.name,
            redirectUrl: `/menu/${category.slug}`,
        }
    }));
    const gridSize = await payload.findGlobal({
        slug: "menu-grid-size"
    });
    // console.log(gridSize);
    return (
        <div className="h-full w-full">
            <div className={cn(
                "hidden md:grid",
                "w-full h-[640px]",
                // "md:gap-6"
            )} style={{gridTemplateRows: `repeat(${gridSize.height}, 1fr)`,gridTemplateColumns: `repeat(${gridSize.width}, 1fr)`}}>
                {cards.map((item, index)=>{
                    return (
                        <div 
                            key={index}
                            className={cn(
                                "w-full h-full"
                            )}
                            style={{
                                gridColumn: `span ${item.cSpan}`,
                                gridRow: `span ${item.rSpan}`,
                            }}
                        >
                            <MenuCard img={item.img} buttonLabel={item.buttonLabel} redirectUrl={item.redirectUrl} />
                        </div>
                    );
                })}
            </div>
            
            <div className={cn(
                "flex md:hidden",
                "w-full h-auto",
                "flex-col space-y-6",
            )}>
                {cards.map((item, index)=>{
                    return (
                        <div 
                            key={index}
                            className={cn(
                                "w-full h-60"
                            )}
                        >
                            <MenuCard img={item.img} buttonLabel={item.buttonLabel} redirectUrl={item.redirectUrl} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}