module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/essential',
    '@nuxt/eslint-config',
    'plugin:vue/vue3-recommended',
    'plugin:nuxt/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'vue/multi-word-component-names': 0,
    'max-len': ['error', { ignorePattern: 'd="([\\s\\S]*?)"', code: 120 }],
    'vue/max-len': ['error', {
      code: 120,
      template: 100,
    }],
    'vue/v-on-event-hyphenation': 0,
  },
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue'],
      },
    },
  },
};
