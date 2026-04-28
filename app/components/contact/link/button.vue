<script lang="ts" setup>
import type { Editor } from '@tiptap/vue-3'

const { editor } = defineProps<{
  editor: Editor
}>()

const [open, _toggleOpen] = useToggle()

const active = computed(() => editor.isActive('link'))
const disabled = computed(() => !editor.isEditable)
</script>

<template>
  <u-popover
    v-model:open="open"
    :ui="{ content: 'p-0.5' }"
  >
    <u-tooltip text="Link">
      <u-button
        icon="i-tabler-link"
        color="neutral"
        active-color="primary"
        variant="ghost"
        active-variant="ghost"
        size="sm"
        :active
        :disabled
      />
    </u-tooltip>

    <template #content>
      <contact-link-editor :editor />
    </template>
  </u-popover>
</template>
