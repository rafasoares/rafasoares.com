<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'
import { contactSchema } from '#shared/schemas/contact'

const toast = useToast()

const state = reactive<ContactSchema>({
  name: '',
  email: '',
  subject: '',
  message: '',
  address: '',
})

const subjects = ref([
  'General inquiry',
  'Feedback',
  'Partnership',
])

async function onSubmit(event: FormSubmitEvent<ContactSchema>) {
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: event.data,
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
    :schema="contactSchema"
    :state="state"
    :validate-on="['input', 'change']"
    @submit="onSubmit"
  >
    <u-form-field
      required
      label="Name"
      name="name"
    >
      <u-input
        v-model="state.name"
        placeholder="Your name"
      />
    </u-form-field>

    <u-form-field
      required
      label="Email"
      name="email"
    >
      <u-input
        v-model="state.email"
        placeholder="Your email"
      />
    </u-form-field>

    <u-form-field
      label="Subject"
      name="subject"
    >
      <u-input-menu
        v-model="state.subject"
        mode="autocomplete"
        clear
        open-on-focus
        placeholder="Select a subject, or write your own"
        :content="{ hideWhenEmpty: true }"
        :items="subjects"
      />
    </u-form-field>

    <u-form-field
      required
      label="Message"
      name="message"
    >
      <u-textarea
        v-model="state.message"
        placeholder="Your message"
        autoresize
        :ui="{ base: 'min-h-72' }"
      />
    </u-form-field>

    <u-form-field
      name="address"
      class="hidden"
      label="Skip this field"
    >
      <u-input
        v-model="state.address"
        placeholder="Your address"
        autocomplete="off"
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
