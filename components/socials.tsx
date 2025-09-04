"use client";

import { FACEBOOK_LINK, INSTAGRAM_LINK, TWITTER_LINK } from '@/lib/links';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { useEffect, useState, useTransition } from 'react';

export default function Socials(){
    const [ socialLinks, setSocialLinks ] = useState<{instagram:string, facebook:string, twitter:string} | null>(null);
    useEffect(()=>{
        async function fetchData(){
            const data = await fetch(process.env.NEXT_PUBLIC_API_URL+"/globals/social-links");
            const json
             :{instagram:string, facebook:string, twitter:string}
             = await data.json();
            setSocialLinks(json);
        }
        fetchData();
    }, []);
    return (
        <div className={cn(
            "pl-12 pr-4",
            "w-auto flex items-center justify-center",
            "space-x-4"
        )}>

            <Link target="_blank" href={socialLinks ? socialLinks.instagram : INSTAGRAM_LINK}>
                <FaInstagram size={16} />
            </Link>

            <Link target="_blank" href={socialLinks ? socialLinks.facebook : FACEBOOK_LINK}>
                <FaFacebook size={16} />
            </Link>

            <Link target="_blank" href={socialLinks ? socialLinks.twitter : TWITTER_LINK}>
                <FaXTwitter size={16}/>
            </Link>

        </div>
    );
}