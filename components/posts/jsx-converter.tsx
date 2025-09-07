/* eslint-disable @typescript-eslint/no-explicit-any */

import { SerializedUploadNode } from "@payloadcms/richtext-lexical";
import { JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import Link from "next/link";

export const jsxConverter:JSXConvertersFunction = ({defaultConverters}) => {
    // console.log(defaultConverters);
    return ({
        ...defaultConverters,
        upload: ({ node }: { node: SerializedUploadNode }) => {
            const uploadDoc = node.value as any;
            return (
                <figure className="py-4">
                    <Image
                        src={uploadDoc.url}
                        width={uploadDoc.width}
                        height={uploadDoc.height}
                        blurDataURL={uploadDoc.blurDataURL}
                        placeholder="blur"
                        alt={uploadDoc.alt}
                        className="rounded-md select-none"
                    />
                </figure>
            );
        },
        link: ({
            node,
            nodesToJSX
        }) => {
            const children = nodesToJSX({
                nodes: node.children
            });
            const rel = node.fields.newTab ? 'noopener noreferrer' : undefined;
            const target = node.fields.newTab ? '_blank' : undefined;
            const href = node.fields.url ?? "";
            if (node.fields.linkType === 'internal') {
                console.error("INTERNAL LINK ERROR");
            }
            return (
                <Link href={href} target={target} rel={rel} className="underline text-blue-500">
                    {...children}
                </Link>
            );
        }
})}