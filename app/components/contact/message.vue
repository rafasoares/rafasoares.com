<script lang="ts" setup>
import { Emoji, gitHubEmojis } from '@tiptap/extension-emoji'
import { TextAlign } from '@tiptap/extension-text-align'
import CodeBlockShiki from 'tiptap-extension-code-block-shiki'

const model = defineModel<string>()

const { placeholder } = defineProps<{ placeholder?: string }>()

const colorMode = useColorMode()

const emoji = Emoji.configure({
  enableEmoticons: true,
})

const codeBlock = CodeBlockShiki.configure({
  defaultTheme: colorMode.value === 'dark' ? 'github-dark' : 'github-light',
  themes: {
    light: 'github-light',
    dark: 'github-dark',
  },
})

const textAlign = TextAlign.configure({
  types: ['heading', 'paragraph'],
})

const extensions = [emoji, codeBlock, textAlign]

const emojis = computed(() => gitHubEmojis.filter(emoji => !emoji.name.startsWith('regional_indicator_')))

const fixedToolbarItems = [
  [
    {
      kind: 'undo',
      icon: 'i-tabler-arrow-back-up',
      tooltip: { text: 'Undo' },
    },
    {
      kind: 'redo',
      icon: 'i-tabler-arrow-forward-up',
      tooltip: { text: 'Redo' },
    },
  ],
  [
    {
      kind: 'mark',
      mark: 'bold',
      icon: 'i-tabler-bold',
      tooltip: { text: 'Bold' },
    },
    {
      kind: 'mark',
      mark: 'italic',
      icon: 'i-tabler-italic',
      tooltip: { text: 'Italic' },
    },
    {
      kind: 'mark',
      mark: 'underline',
      icon: 'i-tabler-underline',
      tooltip: { text: 'Underline' },
    },
    {
      kind: 'mark',
      mark: 'strike',
      icon: 'i-tabler-strikethrough',
      tooltip: { text: 'Strikethrough' },
    },
    {
      kind: 'mark',
      mark: 'code',
      icon: 'i-tabler-code',
      tooltip: { text: 'Inline Code' },
    },
  ],
  [
    {
      icon: 'i-tabler-heading',
      tooltip: { text: 'Heading' },
      content: {
        align: 'start',
      },
      items: [
        {
          kind: 'heading',
          level: 1,
          icon: 'i-tabler-h-1',
          label: 'Heading 1',
        },
        {
          kind: 'heading',
          level: 2,
          icon: 'i-tabler-h-2',
          label: 'Heading 2',
        },
        {
          kind: 'heading',
          level: 3,
          icon: 'i-tabler-h-3',
          label: 'Heading 3',
        },
        {
          kind: 'heading',
          level: 4,
          icon: 'i-tabler-h-4',
          label: 'Heading 4',
        },
        {
          kind: 'heading',
          level: 5,
          icon: 'i-tabler-h-5',
          label: 'Heading 5',
        },
      ],
    },
    {
      icon: 'i-tabler-align-left',
      tooltip: { text: 'Align text' },
      content: {
        align: 'start',
      },
      items: [{
        kind: 'textAlign',
        align: 'left',
        icon: 'i-tabler-align-left',
        label: 'Align Left',
      }, {
        kind: 'textAlign',
        align: 'center',
        icon: 'i-tabler-align-center',
        label: 'Align Center',
      }, {
        kind: 'textAlign',
        align: 'right',
        icon: 'i-tabler-align-right',
        label: 'Align Right',
      }, {
        kind: 'textAlign',
        align: 'justify',
        icon: 'i-tabler-align-justified',
        label: 'Align Justify',
      }],
    },
    {
      kind: 'bulletList',
      icon: 'i-tabler-list',
      tooltip: { text: 'Bullet List' },
    },
    {
      kind: 'orderedList',
      icon: 'i-tabler-list-numbers',
      tooltip: { text: 'Ordered List' },
    },
    {
      kind: 'blockquote',
      icon: 'i-tabler-blockquote',
      tooltip: { text: 'Block Quote' },
    },
    {
      kind: 'codeBlock',
      icon: 'i-tabler-codeblock',
      tooltip: { text: 'Code Block' },
    },
  ],
  [
    {
      slot: 'link' as const,
    },
    {
      kind: 'emoji',
      icon: 'i-tabler-mood-happy',
      tooltip: { text: 'Emoji' },
    },
    {
      kind: 'hr',
      icon: 'i-tabler-minus',
      tooltip: { text: 'Horizontal Rule' },
    },
  ],
  [
    {
      kind: 'clearFormatting',
      icon: 'i-tabler-clear-formatting',
      tooltip: { text: 'Clear formatting' },
    },
  ],
]
</script>

<template>
  <u-editor
    v-slot="{ editor }"
    v-model="model"
    content-type="markdown"
    class="border border-muted rounded-md"
    :ui="{
      base: 'sm:px-2.5 min-h-72',
    }"
    :extensions
    :placeholder="{ mode: 'firstLine', placeholder }"
    :starter-kit="{
      codeBlock: false,
    }"
  >
    <u-editor-toolbar
      :editor
      :items="fixedToolbarItems"
      class="border-b border-muted px-2.5 py-1.5"
    >
      <template #link>
        <contact-link-button
          :editor
        />
      </template>
    </u-editor-toolbar>

    <u-editor-toolbar
      :editor
      :items="[{ slot: 'link' as const }]"
      layout="bubble"
      :should-show="({ editor, view }) => view.hasFocus() && editor.isActive('link')"
    >
      <template #link>
        <contact-link-editor
          :editor
        />
      </template>
    </u-editor-toolbar>

    <u-editor-emoji-menu
      :editor
      :items="emojis"
    />
  </u-editor>
</template>

<style>
html.dark .tiptap .shiki,
html.dark .tiptap .shiki span {
  color: var(--shiki-dark) !important;
  background-color: var(--ui-bg-muted) !important;
}
</style>
