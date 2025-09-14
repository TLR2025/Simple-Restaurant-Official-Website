import { authenticated } from "@/payload-access/authenticated";
import { author } from "@/payload-fields/author";
import { metadata } from "@/payload-fields/metadata";
import { createSlugField, format } from "@/payload-fields/slug";
import { revalidatePath } from "next/cache";
import { CollectionAfterChangeHook, CollectionConfig } from "payload";

const afterChange_author:CollectionAfterChangeHook = async ({doc, req}) => {
    if(req.context?.skipGenAuthor) return;
    const userId = req.user?.id!;
    const author = (await req.payload.findByID({
        collection: "users",
        id: userId,
    }));
    // console.log(author);
    await req.payload.update({
        req: req,
        context: {skipGenAuthor: true},
        collection: "posts",
        id: doc.id,
        data: {
            author: {
                avatar: author.avatar,
                name: author.username,
                slug: author.slug,
            },
        }
    })
}

const afterChange_genTempTitle:CollectionAfterChangeHook = async ({doc, req}) => {
    if(req.context?.skipGenTempTitle) return;
    const title = doc.metadata.title;
    await req.payload.update({
        req:req,
        collection: "posts",
        id:doc.id,
        context: {skipGenTempTitle: true},
        data: {
            title: title,
            slug: format(title),
        }
    });
}

const afterChange_cache:CollectionAfterChangeHook = async ({doc, previousDoc})=>{
    if(previousDoc && previousDoc.slug)
        await revalidatePath("/blog/"+previousDoc.slug);
    await revalidatePath("/blog/"+doc.slug);
    await revalidatePath("/blog");
}

export const Post:CollectionConfig = {
    slug: "posts",
    labels: {
        singular: "Post",
        plural: "Posts",
    },
    fields: [
        {
            name: "title",
            label: "Title",
            type: "text",
            admin: {
                hidden: true,
            }
        },
        {
            name: "content",
            label: "Content",
            type: "richText",
            required: true,
        },
        {
            name: "vision",
            label: "Vision",
            type: "group",
            fields: [
                {
                    name: "themeColor",
                    label: "Theme color",
                    type: "text",
                    admin: {
                        components: {
                            Field: "@/components/payload/color-picker.tsx",
                        }
                    }
                }
            ]
        },
        {
            name: "published",
            label: "Published",
            type: "checkbox",
            admin: {
                position:"sidebar",
            },
            defaultValue: false,
        },
        metadata,
        {
            name: "Tags",
            type: "relationship",
            hasMany: true,
            relationTo: "tags",
            admin: {
                position: "sidebar",
            }
        },
        createSlugField("title"),
        author,
    ],
    admin: {
        useAsTitle: "title",
    },
    hooks: {
        afterChange: [afterChange_author, afterChange_genTempTitle, afterChange_cache],
    },
    access: {
        read: authenticated,
        create: authenticated,
        update: authenticated,
        delete: authenticated,
    }
}