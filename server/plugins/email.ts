import { faker } from '@faker-js/faker'

export default defineNitroPlugin((app) => {
  app.hooks.hook('nuxt-email-renderer:devtools:resolveProps', (context) => {
    if (context.templateName === 'contact-message') {
      const firstName = faker.person.firstName()
      const lastName = faker.person.lastName()

      context.props = {
        ...context.props,
        name: faker.person.fullName({ firstName, lastName }),
        email: faker.internet.email({ firstName, lastName }),
        subject: faker.company.catchPhrase(),
        message: faker.lorem.paragraphs(),
      }
    }
  })
})
