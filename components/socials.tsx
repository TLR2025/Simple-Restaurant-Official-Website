import { FACEBOOK_LINK, INSTAGRAM_LINK, TWITTER_LINK } from '@/lib/links';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

export default function Socials(){
    return (
        <div className={cn(
            "pl-12 pr-4",
            "w-auto flex items-center justify-center",
            "space-x-4"
        )}>

            <Link href={INSTAGRAM_LINK}>
                <FaInstagram size={16} />
            </Link>

            <Link href={FACEBOOK_LINK}>
                <FaFacebook size={16} />
            </Link>

            <Link href={TWITTER_LINK}>
                <FaXTwitter size={16}/>
            </Link>

        </div>
    );
}