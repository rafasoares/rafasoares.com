import { z } from '@nuxt/content'

export const aboutSchema = z.object({
  heroTitle: z.string(),
  philosophy: z.object({
    label: z.string(),
    title: z.string(),
    description: z.string(),
    cards: z.array(z.object({
      title: z.string(),
      description: z.string(),
      details: z.string(),
    })),
  }),
})
