import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Pilar de conteúdo (ver docs/produto/conteudo-seo.md no repo projeto-biblico):
    // devocional | ansiedade-paz | oracao | biblia-iniciantes | comparacao | estatisticas
    pillar: z.enum([
      'devocional',
      'ansiedade-paz',
      'oracao',
      'biblia-iniciantes',
      'comparacao',
      'estatisticas',
    ]),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
