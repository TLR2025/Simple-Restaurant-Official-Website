import { buildConfig } from "payload";
import {
    lexicalEditor,
    UploadFeature,
    LinkFeature,
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

export default buildConfig({
    serverURL: process.env.PAYLOAD_SERVER_URL,

    editor: lexicalEditor({
        features: ({ defaultFeatures, rootFeatures }) => [
            ...defaultFeatures,
            ...rootFeatures,
            UploadFeature(),
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
    ],

    globals: [
        DefaultMenuCategorySlug,
        MenuGridSize,
        About,
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