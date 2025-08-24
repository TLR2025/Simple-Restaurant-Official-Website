import path from "path";
import { CollectionConfig } from "payload";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Avatar : CollectionConfig<"avatars"> = {
    slug: "avatars",
    fields: [
        {
            name: "alt",
            label: "Alt Text",
            type: "text",
            required: true,
        }
    ],
    upload: {
        staticDir: path.resolve(dirname, '../public/avatars'),
        mimeTypes: ['image/*'],
        imageSizes: [
            {
                name: "thumbnail",
                width: 8,
                height: 8,
                position: "center",
                fit: "cover",
            },
            {
                name: "square",
                width: 128,
                height: 128,
                position: "center",
                fit: "cover",
            }
        ],
        adminThumbnail: 'thumbnail',
    },
    access: {
        read: () => true,
    }
}   