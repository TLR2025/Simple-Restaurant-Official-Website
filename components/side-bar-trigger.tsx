import { HiBars2 } from 'react-icons/hi2';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { ABOUT_LINK, BLOG_LINK, HOME_LINK, MENU_LINK } from '@/lib/links';
import Link from 'next/link';

export default function SideBarTrigger(){
    return (
        <Sheet>
            <SheetTrigger className="px-4 md:pr-16">
                <HiBars2 size={32} className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent className={cn(
                "w-64"
            )}>
                <SheetHeader>
                    <SheetTitle>Jump to...</SheetTitle>
                </SheetHeader>
                <div className={cn(
                    "h-full w-full",
                )}>
                    <div className={cn(
                        "flex flex-col",
                        "w-full",
                    )}>
                        <Button variant="link" asChild className={cn(
                            "text-black",
                            "transition-all duration-500 ease-in-out",
                            "text-[18px] font-light"
                        )}>
                            <Link href={HOME_LINK}>
                                Home
                            </Link>
                        </Button>

                        <Button variant="link" asChild className={cn(
                            "text-black",
                            "transition-all duration-500 ease-in-out",
                            "text-[18px] font-light"
                        )}>
                            <Link href={MENU_LINK}>
                                Menu
                            </Link>
                        </Button>

                        <Button variant="link" asChild className={cn(
                            "text-black",
                            "transition-all duration-500 ease-in-out",
                            "text-[18px] font-light"
                        )}>
                            <Link href={BLOG_LINK}>
                                Blog
                            </Link>
                        </Button>

                        <Button variant="link" asChild className={cn(
                            "text-black",
                            "transition-all duration-500 ease-in-out",
                            "text-[18px] font-light"
                        )}>
                            <Link href={ABOUT_LINK}>
                                About
                            </Link>
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}