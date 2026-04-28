<script lang="ts" setup>
useTitle('Contact')
</script>

<template>
  <u-container>
    <u-page-header
      title="Get in touch"
      description="Send me a message, schedule a meeting, or follow me on social media"
    />
    <div class="grid grid-cols-3 gap-8 mt-8 space-y-12">
      <nuxt-page class="col-span-2" />

      <aside class="flex flex-col gap-8">
        <u-button
          block
          class="w-full"
          color="neutral"
          variant="subtle"
          size="xl"
          href="https://calendly.com/rafasoares/meet-and-greet"
          target="_blank"
          icon="i-tabler-calendar"
        >
          Schedule a meeting
        </u-button>

        <div class="flex justify-center gap-8">
          <u-button
            variant="ghost"
            color="neutral"
            size="xl"
            to="https://www.linkedin.com/in/rafasoaresms"
            icon="i-tabler-brand-linkedin"
            target="_blank"
          />

          <u-button
            variant="ghost"
            color="neutral"
            size="xl"
            to="https://github.com/rafasoares"
            icon="i-tabler-brand-github"
            target="_blank"
          />
        </div>
      </aside>
    </div>
  </u-container>
</template>
