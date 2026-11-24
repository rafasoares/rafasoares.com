import { contactSchema } from '#shared/schemas/contact'
import { ServerClient } from 'postmark'

export default defineEventHandler<{ body: ContactSchema }>(async (event) => {
  const config = useRuntimeConfig(event)
  const { data, error, success } = await readValidatedBody(event, contactSchema.safeParse)

  if (!success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid request body',
      data: error.issues,
    })
  }

  if (data.address) {
    console.warn('Spam detected:', data)
  }
  else {
    const { html, text, subject } = await renderEmailComponent('contact-message', data)
    const client = new ServerClient(config.postmarkServerToken)
    await client.sendEmail({
      From: `rafasoares.com <${config.senderEmail}>`,
      To: `Rafael Soares <${config.public.contactEmail}>`,
      ReplyTo: `${data.name} <${data.email}>`,
      Subject: subject ?? 'New contact message',
      HtmlBody: html,
      TextBody: text,
      MessageStream: 'outbound',
    })
  }

  return {
    message: 'Message sent successfully',
    error: false,
  }
})
