// @ts-check

import eslint from '@eslint/js';
import playwright from 'eslint-plugin-playwright';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const tsConfig = {
  languageOptions: {
    parser: tsParser,
  },
  plugins: {
    '@typescript-eslint': tsPlugin,
  },
  rules: {
    ...tsPlugin.configs.recommended.rules,
  },
};

export default [
  {
    files: ['src/**/*.ts'],
    ...tsConfig,
  },
  {
    files: ['src/**/*.ts'],
    plugins: {
      ...tsConfig.plugins,
      playwright,
    },
    rules: {
      ...tsConfig.rules,
      ...playwright.configs['flat/recommended'].rules,
      'playwright/expect-expect': 'off',
    },
  },
  {
    files: ['src/**/*.js'],
    rules: {
      ...eslint.configs.recommended.rules,
    },
  },
];
