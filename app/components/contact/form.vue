<script lang="ts" setup>
import { email, required } from '@regle/rules'

const { r$ } = useRegle({
  name: '',
  email: '',
  subject: '',
  message: `# Building Modern Interfaces with Nuxt UI

Welcome to the **Nuxt UI Editor** — a powerful rich text editing experience built on [TipTap](https://tiptap.dev). This editor combines *flexibility* with ease of use, making content creation a breeze.

## Rich Formatting Options

The editor supports all common text formatting including **bold**, *italic*, <u>underline</u>, ~~strikethrough~~, and \`inline code\`. You can also combine them for **_bold and italic_** text.
`,
}, {
  name: { required },
  email: { required, email },
  message: { required },
})

const subjects = [
  'General inquiry',
  'Feedback',
  'Partnership',
]

onUnmounted(() => {
  console.log('unmounted')
})
</script>

<template>
  <u-form
    :schema="r$"
    :state="r$.$value"
    netlify
  >
    <u-form-field
      required
      label="Name"
      name="name"
    >
      <u-input
        v-model="r$.$value.name"
        placeholder="Your name"
      />
    </u-form-field>
    <u-form-field
      required
      label="Email"
      name="email"
    >
      <u-input
        v-model="r$.$value.email"
        placeholder="Your email"
      />
    </u-form-field>

    <u-form-field
      label="Subject"
      name="subject"
    >
      <u-select-menu
        v-model="r$.$value.subject"
        create-item="always"
        placeholder="Select a subject, or write your own"
        :items="subjects"
        :search-input="{ placeholder: 'Type to search or create an option...' }"
      />
    </u-form-field>

    <u-form-field
      required
      label="Message"
      name="message"
    >
      <contact-message
        v-model="r$.$value.message"
        placeholder="Your message"
      />
    </u-form-field>

    <u-button
      type="submit"
    >
      Send message
    </u-button>
  </u-form>
</template>
