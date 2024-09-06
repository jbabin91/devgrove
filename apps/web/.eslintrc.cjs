/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@repo/eslint-config/base.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
