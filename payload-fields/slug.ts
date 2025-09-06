import { Field, FieldHook } from 'payload';

export const format = (val: string): string => val.replace(/ /g, '-').replace(/[^\w-]+/g, '').toLowerCase();

const formatSlug = (fallback: string): FieldHook => ({ value, originalDoc, data }) => {
  if (typeof value === 'string') {
    return format(value);
  }
  const fallbackData = (data && data[fallback]) || (originalDoc && originalDoc[fallback]);

  if (fallbackData && typeof fallbackData === 'string') {
    return format(fallbackData);
  }

  return value;
};

/**
 * 工厂函数：生成 slug 字段
 * @param fallback 用来生成 slug 的字段名，比如 'title' 或 'username'
 */
export const createSlugField = (fallback: string): Field => ({
    name: 'slug',
    label: 'Slug',
    type: 'text',
    // hidden: true,              // 不显示在 Admin UI
    admin: {
        readOnly: true,          // 即使显示也只读
        description: `This field is automatically generated from the ${fallback} field.`,
    },
    unique: true,
    hooks: {
        beforeValidate: [formatSlug(fallback)],
    },
});