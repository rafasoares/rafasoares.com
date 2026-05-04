<script lang="ts" setup>
import { email, required } from '@regle/rules'

const toast = useToast()

const { r$ } = useRegle({
  name: '',
  email: '',
  subject: '',
  message: '',
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

async function onSubmit() {
  try {
    const data = new FormData()
    data.append('form-name', 'contact')
    Object.entries(r$.$value).forEach(([key, value]) => {
      data.append(key, value)
    })

    await $fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data,
    })

    navigateTo('/contact/success')
  }
  catch (error) {
    console.error('Failed to submit contact form:', error)

    toast.add({
      id: 'contact-form-error',
      title: `Oh no! Can't send your message right now.`,
      icon: 'i-tabler-mood-wrrr',
      description: 'Please try again later.',
      color: 'error',
    })
  }
}
</script>

<template>
  <u-form
    :schema="r$"
    :state="r$.$value"
    netlify
    action="/contact"
    method="POST"
    @submit="onSubmit"
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
      loading-auto
    >
      Send message
    </u-button>
  </u-form>
</template>
