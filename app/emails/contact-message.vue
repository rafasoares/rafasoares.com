<script setup lang="ts">
interface ContactMessageProps {
  name: string
  email: string
  subject?: string
  message: string
}

defineProps<ContactMessageProps>()
</script>

<template>
  <e-html lang="en">
    <e-subject>{{ subject || 'General inquiry' }} - New contact message</e-subject>
    <e-head />
    <e-body style="background-color: #f4f4f5; padding: 32px 16px;">
      <e-preview>New message from {{ name }} via rafasoares.com</e-preview>
      <e-container>
        <e-section
          style="background-color: #ffffff; border: 1px solid #e4e4e7; padding: 32px;"
        >
          <e-heading
            as="h1"
            style="color: #18181b; font-family: Arial, Helvetica, sans-serif; font-size: 24px; line-height: 32px; margin: 0 0 24px;"
          >
            New contact message
          </e-heading>

          <e-text
            style="color: #3f3f46; font-family: Arial, Helvetica, sans-serif; margin: 0 0 8px;"
          >
            <strong>Name:</strong> {{ name }}
          </e-text>
          <e-text
            style="color: #3f3f46; font-family: Arial, Helvetica, sans-serif; margin: 0 0 8px;"
          >
            <strong>Email:</strong>
            <e-link
              :href="`mailto:${email}`"
              style="color: #2563eb;"
            >
              {{ email }}
            </e-link>
          </e-text>
          <e-text
            style="color: #3f3f46; font-family: Arial, Helvetica, sans-serif; margin: 0;"
          >
            <strong>Subject:</strong> {{ subject || 'General inquiry' }}
          </e-text>

          <e-hr style="border-color: #e4e4e7; margin: 24px 0;" />

          <e-text
            style="color: #27272a; font-family: Arial, Helvetica, sans-serif; margin: 0; white-space: pre-wrap;"
          >
            {{ message }}
          </e-text>
        </e-section>
      </e-container>
    </e-body>
  </e-html>
</template>
