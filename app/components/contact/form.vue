<script lang="ts" setup>
import { email, required } from '@regle/rules'

const toast = useToast()

const { r$ } = useRegle({
  name: '',
  email: '',
  subject: '',
  message: '',
  address: '',
}, {
  name: { required },
  email: { required, email },
  message: { required },
})

const subjects = ref([
  'General inquiry',
  'Feedback',
  'Partnership',
])

async function onSubmit() {
  try {
    const body = new URLSearchParams()

    body.append('form-name', 'contact')
    Object.entries(r$.$value).forEach(([key, value]) => {
      body.append(key, value)
    })

    await $fetch('/contact/success', {
      method: 'POST',
      body,
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
    id="contact"
    :schema="r$"
    :state="r$.$value"
    :validate-on="['input', 'change']"
    data-netlify="true"
    data-netlify-honeypot="address"
    @submit="onSubmit"
  >
    <u-input
      type="hidden"
      name="form-name"
      value="contact"
    />

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
      <u-input-menu
        v-model="r$.$value.subject"
        autocomplete
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
        v-model="r$.$value.message"
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
        v-model="r$.$value.address"
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
