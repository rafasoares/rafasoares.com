import type { z } from 'zod'
import type { contactSchema } from '#shared/schemas/contact'

export type ContactSchema = z.infer<typeof contactSchema>
