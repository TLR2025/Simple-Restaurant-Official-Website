import { HiBars2 } from 'react-icons/hi2';
import { Sheet, SheetTrigger } from "./ui/sheet";

export default function SideBarTrigger(){
    return (
        <Sheet>
            <SheetTrigger className="px-4 md:pr-16">
                <HiBars2 size={32} />
            </SheetTrigger>
        </Sheet>
    );
}