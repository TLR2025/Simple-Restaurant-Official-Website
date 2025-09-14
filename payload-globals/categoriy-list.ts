import { GlobalConfig } from "payload";

export const CategoryList:GlobalConfig = {
    slug: "category-list",
    label: "Category List",
    fields: [
        {
            name: "categories",
            type: "array",
            required: true,
            fields: [
                {
                    name: "category",
                    type: "relationship",
                    relationTo: "categories",
                    required: true,
                },
            ],
        }
    ]
}