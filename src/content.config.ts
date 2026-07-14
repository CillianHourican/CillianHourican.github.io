import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const publications = defineCollection({
  loader: file('src/content/publications.json'),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    category: z.enum([
      'multimorbidity-health-networks',
      'information-theory-methods',
      'cross-domain-applications',
    ]),
    tldr: z.string(),
    doi: z.string().optional(),
    url: z.string().optional(),
    pdf: z.string().optional(),
    code: z.string().optional(),
    arxiv: z.string().optional(),
    preprint: z.boolean().default(false),
    first: z.boolean().default(false),
    jointFirst: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const teaching = defineCollection({
  loader: file('src/content/teaching.json'),
  schema: z.object({
    course: z.string(),
    programme: z.string(),
    level: z.enum(['MSc', 'BSc', 'TA']),
    institution: z.string(),
    years: z.string(),
    role: z.string(),
    description: z.string(),
    order: z.number().default(0),
  }),
});

const supervision = defineCollection({
  loader: file('src/content/supervision.json'),
  schema: z.object({
    student: z.string(),
    projectTitle: z.string().optional(),
    programme: z.string(),
    level: z.enum(['MSc', 'BSc']),
    year: z.number().optional(),
    role: z.enum(['Daily supervisor', 'Assessor']),
    blurb: z.string().optional(),
    url: z.string().optional(),
  }),
});

export const collections = { publications, teaching, supervision };
