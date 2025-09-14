"use client";
import { lightenHexColor } from "@/lib/lighten-hex-color";
import { Tag } from "@/types/tag";
import Link from "next/link";

interface Props {
  tags: Tag[];
  themeColor: string;
}

export default function TagList({ tags, themeColor }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link href={`/blog/tag/${tag.slug}?page=1`} key={tag.id}>
          <span
            className="text-sm font-medium px-3 py-1 rounded-full transition-colors"
            style={{
              backgroundColor: lightenHexColor(themeColor, 80),
              color: lightenHexColor(themeColor, 20),
            }}
          >
            {tag.tagName}
          </span>
        </Link>
      ))}
    </div>
  );
}
