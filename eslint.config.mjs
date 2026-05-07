// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    ignores: ['.agents/**'],
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'vue/html-indent': 'warn',
    },
  },
)
