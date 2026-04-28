<script lang="ts" setup>
import { required, url } from '@regle/rules'
import type { Editor } from '@tiptap/vue-3'

const { editor } = defineProps<{
  editor: Editor
}>()

const { r$ } = useRegle('', { required, url })

function getCurrentUrl() {
  const { href } = editor.getAttributes('link')
  r$.$reset({ toState: href || '' })
}

function onSubmit() {
  if (r$.$invalid) return

  const url = r$.$value ?? ''
  let chain = editor.chain().focus()

  const { selection } = editor.state
  const hasCode = editor.isActive('code')

  if (hasCode && !selection.empty) {
    chain = chain.extendMarkRange('code')
  }

  chain = chain.extendMarkRange('link').setLink({ href: url })

  if (selection.empty) {
    chain = chain.insertContent(url)
  }

  chain.run()
}

function removeLink() {
  editor
    .chain()
    .focus()
    .extendMarkRange('link')
    .unsetLink()
    .setMeta('preventAutolink', true)
    .run()
}

onMounted(() => {
  getCurrentUrl()
  editor.on('selectionUpdate', getCurrentUrl)
})

onUnmounted(() => {
  editor.off('selectionUpdate', getCurrentUrl)
})
</script>

<template>
  <u-form
    class="space-y-0 flex items-center"
    :schema="r$"
    :state="r$.$value"
    :validate-on="['change', 'input']"
    @submit.prevent="onSubmit()"
  >
    <u-input
      v-model="r$.$value"
      autofocus
      type="url"
      placeholder="https://example.com"
      icon="i-tabler-link"
      size="sm"
      variant="none"
      :color="r$.$error ? 'error' : 'neutral'"
    >
      <template
        v-if="r$.$error"
        #trailing
      >
        <u-tooltip :text="r$.$errors[0]">
          <u-icon
            name="i-tabler-alert-triangle"
            class="text-error"
          />
        </u-tooltip>
      </template>
    </u-input>

    <u-button
      size="sm"
      color="primary"
      variant="ghost"
      type="submit"
      icon="i-tabler-check"
      :disabled="r$.$invalid"
    />

    <template v-if="r$.$ready">
      <u-separator
        orientation="vertical"
        class="h-6 mx-1"
      />

      <u-button
        size="sm"
        color="neutral"
        variant="ghost"
        icon="i-tabler-external-link"
        :href="r$.$value"
        target="_blank"
      />

      <u-button
        size="sm"
        color="error"
        variant="ghost"
        icon="i-tabler-trash"
        @click="removeLink()"
      />
    </template>
  </u-form>
</template>
