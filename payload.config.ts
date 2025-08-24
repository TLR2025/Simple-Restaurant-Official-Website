import { buildConfig } from "payload";
import { lexicalEditor } from '@payloadcms/richtext-lexical'
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

export default buildConfig({
    serverURL: process.env.PAYLOAD_SERVER_URL,

    editor: lexicalEditor(),

    collections: [
        User,
        Review,
        Avatar,
        Media,
        Dish,
        Category,
    ],

    globals: [
        DefaultMenuCategorySlug,
        MenuGridSize,
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