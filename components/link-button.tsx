"use client"

import { ReactNode } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ABOUT_LINK } from "@/lib/links";
import { LuMoveRight } from 'react-icons/lu';

interface LinkButtonProps{
    label: string
    className?: string
}

export default function LinkButton({ label, className }: LinkButtonProps){
    return (
        <Button variant="ghost" asChild className={cn("flex items-center justify-between" ,className)}>
            <Link href={ABOUT_LINK}>
                {label}
                <LuMoveRight />
            </Link>
        </Button>
    );
}