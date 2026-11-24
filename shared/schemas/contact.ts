import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().nonempty(),
  email: z.email(),
  subject: z.string().optional(),
  message: z.string().nonempty(),
  address: z.string().optional(),
})
