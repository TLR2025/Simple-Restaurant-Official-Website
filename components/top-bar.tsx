"use client"

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Socials from "./socials";
import Link from "next/link";
import { ABOUT_LINK, BLOG_LINK, HOME_LINK, MENU_LINK } from "@/lib/links";
import SideBarTrigger from "./side-bar-trigger";
import Image from "next/image";
import logo from "@/public/logo.png";
import logo2 from "@/public/logo2.png";
import { usePathname } from "next/navigation";

export default function TopBar(){
    const path = usePathname();
    // console.log(path);
    const [atTop, setAtTop] = useState(true);
    useEffect(() => {
        // console.log(path)
        if(path != "/" && path !="/about" && !path.startsWith("/blog/")) {
            setAtTop(false);
            return;
        }
        const onScroll = () => setAtTop(window.scrollY < 20);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [path]);
    return (
        <div className={cn(
            (atTop) ? "bg-transparent h-28 text-white" : "bg-white/80 h-20 md:h-24 text-black",
            "transition-all duration-500 ease-in-out",
            "fixed top-0 left-0 z-50",
            "w-full",
            "flex items-center justify-between",
            "px-4"
        )}>
            <div className={cn(
                "pl-4",
                "select-none"
            )}>
                <Link href="/">
                    <Image placeholder="blur" alt="logo" src={atTop?logo:logo2} />
                </Link>
            </div>

            <div className={cn(
                "pr-4",
                "flex items-center justify-end"
            )}>
                <div className={cn(
                    "w-full",
                    "hidden md:flex"
                )}>
                    <Button variant="link" asChild className={cn(
                        atTop ? "text-white" : "text-black",
                        "transition-all duration-500 ease-in-out",
                        "text-[18px] font-light"
                    )}>
                        <Link href={HOME_LINK}>
                            Home
                        </Link>
                    </Button>

                    <Button variant="link" asChild className={cn(
                        atTop ? "text-white" : "text-black",
                        "transition-all duration-500 ease-in-out",
                        "text-[18px] font-light"
                    )}>
                        <Link href={MENU_LINK}>
                            Menu
                        </Link>
                    </Button>

                    <Button variant="link" asChild className={cn(
                        atTop ? "text-white" : "text-black",
                        "transition-all duration-500 ease-in-out",
                        "text-[18px] font-light"
                    )}>
                        <Link href={BLOG_LINK}>
                            Blog
                        </Link>
                    </Button>

                    <Button variant="link" asChild className={cn(
                        atTop ? "text-white" : "text-black",
                        "transition-all duration-500 ease-in-out",
                        "text-[18px] font-light"
                    )}>
                        <Link href={ABOUT_LINK}>
                            About
                        </Link>
                    </Button>
                </div>

                <div className={cn(
                    "flex",
                    "w-auto",
                    "items-center justify-end"
                )}>
                    <Socials />
                    <SideBarTrigger />
                </div>

            </div>
        </div>
    );
}