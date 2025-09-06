import { buildConfig } from "payload";
import {
    lexicalEditor,
    LinkFeature,
    UploadFeature,
} from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres';

import { User } from "./payload-collections/user";
import { Review } from "./payload-collections/reviews";
import { Avatar } from "./payload-collections/avatar";
import { Media } from "./payload-collections/media";
import { Dish } from "./payload-collections/dish";
import { Category } from "./payload-collections/category";

import { DefaultMenuCategorySlug } from "./payload-globals/default-menu-category-slug";
import { MenuGridSize } from "./payload-globals/landing-page-menu-grid-size";

import sharp from "sharp";
import { About } from "./payload-globals/about";
import { Metadata } from "./payload-collections/metadata";
import { SocialLinks } from "./payload-globals/social-links";
import { Post } from "./payload-collections/post";
import { Tag } from "./payload-collections/tag";
import { FooterData } from "./payload-globals/footer-data";

export default buildConfig({
    serverURL: process.env.PAYLOAD_SERVER_URL,

    editor: lexicalEditor({
        features: ({ defaultFeatures, rootFeatures }) => [
            ...defaultFeatures.filter((value)=>{return value.key!=="relationship"}),
            ...rootFeatures,
            UploadFeature(),
            LinkFeature({
                enabledCollections: [],
            }),
        ],
    }),

    collections: [
        User,
        Review,
        Avatar,
        Media,
        Dish,
        Category,
        Metadata,
        Post,
        Tag,
    ],

    globals: [
        DefaultMenuCategorySlug,
        MenuGridSize,
        About,
        SocialLinks,
        FooterData,
    ],

    secret: process.env.PAYLOAD_SECRET || '',
    db: postgresAdapter({
        push: true,
        pool: {
            connectionString: process.env.DATABASE_URL || '',
        }
    }),

    sharp: sharp,
});