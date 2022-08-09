const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier-vue/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    semi: ['error', 'always'],
    'no-console': process.ENV === 'production' ? 2 : 0,
    'no-debugger': process.ENV === 'production' ? 2 : 0,
    '@typescript-eslint/no-unused-vars': 'error'
  },

  overrides: [
    {
      files: ['cypress/**/*.ts'],
      rules: {
        '@typescript-eslint/no-namespace': 0
      }
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 0
      }
    }
  ]
});
