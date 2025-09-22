/* eslint-disable @typescript-eslint/no-explicit-any */

import { cn } from "@/lib/utils";
import Image from "next/image";
import { truncate } from "@/lib/truncate";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogArticleCard({ article }:{article:any}) {
  return (
    <div
      className={cn(
        "bg-gray-100 p-6 rounded-lg shadow-md",
        "flex flex-col",
        "justify-between"
      )}
    >
      <div className="w-full h-96 mb-4">
        <Link
          href={"/blog/" + article.slug}
          className={cn(
            "block",
            "relative",
            "w-full h-48 mb-4",
            "bg-gray-300",
            "rounded-md overflow-hidden",
            "select-none"
          )}
        >
          {article.metadata.images &&
          article.metadata.images[0] &&
          article.metadata.images[0].image ? (
            <Image
              src={article.metadata.images[0].image.url}
              alt={article.metadata.images[0].image.alt}
              width={article.metadata.images[0].image.width}
              height={article.metadata.images[0].image.height}
              placeholder="blur"
              blurDataURL={article.metadata.images[0].image.blurDataURL}
              className={cn(
                "object-cover object-center",
                "w-full h-full",
                "hover:scale-110",
                "transition-all duration-400 ease-in-out"
              )}
            />
          ) : (
            <p
              className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "font-bold text-3xl text-white"
              )}
            >
              {truncate(article.title, 16)}
            </p>
          )}
        </Link>
        <Link href={"/blog/" + article.slug}>
          <h3 className="text-xl font-bold mb-2">
            {truncate(article.title, 48)}
          </h3>
        </Link>
        <p className="text-gray-700 mb-4">
          {truncate(article.metadata.description, 140)}
        </p>
      </div>
      <Button
        asChild
        type="button"
        variant="ghost"
        className={cn(
          "px-4 py-2",
          "bg-red-500 text-white rounded-md",
          "hover:bg-red-600 hover:text-white"
        )}
      >
        <Link href={"/blog/" + article.slug}>Read More</Link>
      </Button>
    </div>
  );
}
