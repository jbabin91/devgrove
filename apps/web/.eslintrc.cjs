/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@repo/eslint-config/base.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  overrides: [
    {
      files: ['**/registry/**'],
      rules: {
        'sort-keys-fix/sort-keys-fix': 'off',
        '@typescript-eslint/no-redundant-type-constituents': 'off',
      },
    },
    {
      files: ['**/scripts/**'],
      rules: {
        'unicorn/no-process-exit': 'off',
      },
    },
    {
      files: ['**/*.{jsx,tsx}'],
      rules: {
        'react/no-unknown-property': 'off',
      },
    },
  ],
};
