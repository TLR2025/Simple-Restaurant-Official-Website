"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface Props {
    currentPage: number,
    totalPages: number,
    hasPrev: boolean,
    hasNext: boolean,
    prefixURL: string,
}

export default function Pagination({ currentPage, totalPages, hasPrev, hasNext, prefixURL}:Props) {
    
    // console.log(currentPage);
    // console.log(totalPages);
    // console.log(hasPrev);
    // console.log(hasNext);
    
    const router = useRouter();

    const visibleCount = Math.min(5, totalPages);

    let start = currentPage - Math.floor(visibleCount / 2);
    let end = start + visibleCount - 1;

    if (start < 1) {
        start = 1;
        end = visibleCount;
    }

    if (end > totalPages) {
        end = totalPages;
        start = Math.max(1, totalPages - visibleCount + 1);
    }

    const pages: number[] = [];
    for (let i = start; i <= end; i++) pages.push(i);

  return (
    <div className="flex space-x-4 mt-8">
        <button 
            disabled={!hasPrev} 
            className={cn(
                "px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100",
                "w-32",
                hasPrev?"":"cursor-not-allowed opacity-50",
            )}
            onClick={()=>{
                router.push(prefixURL+(currentPage+1));
            }}
        >
            Previous
        </button>
        {pages.map((page) => (
            <button
                key={page}
                aria-current={page === currentPage ? "page" : undefined}
                className={cn(
                    "px-4 py-2 border border-gray-300 rounded-md",
                    page == currentPage
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-white text-black hover:bg-gray-100"
            )}
                onClick={()=>{
                    router.push(prefixURL+page);
                }}
            >
                {page}
            </button>
        ))}
        <button 
            disabled={!hasNext}
            className={cn(
                "px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100",
                "w-32",
                hasNext?"":"cursor-not-allowed opacity-50",
            )}
            onClick={()=>{
                router.push(prefixURL+(currentPage+1));
            }}
        >
            Next
        </button>
    </div>
  );
}