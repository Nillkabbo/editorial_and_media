import { defineCollection, z } from 'astro:content';

const scholarly = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    date: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
    readingTime: z.number().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const editorial = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
    readingTime: z.number().optional(),
    category: z.enum(['opinion', 'analysis', 'commentary', 'review']),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().optional(),
    tags: z.array(z.string()),
    type: z.enum(['guide', 'template', 'checklist', 'reference']),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  scholarly,
  editorial,
  resources,
};
