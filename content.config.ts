import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    experience: defineCollection({
      type: 'page',
      source: 'experience/*.md',
      schema: z.object({
        company: z.string().optional(),
        location: z.string().optional(),
        startDate: z.date(),
        endDate: z.date().optional(),
        skills: z.array(z.string()),
      }),
    }),
  },
})
