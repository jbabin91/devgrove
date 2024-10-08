/** @type {import('eslint').Linter.Config} */
/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: { browser: true, es2022: true, node: true },
  ignorePatterns: [
    'node_modules',
    'dist',
    '.turbo',
    '.eslintrc.cjs',
    '.eslintrc.js',
    '*.gen.ts',
    '__registry__',
  ],
  extends: [
    'turbo',
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  plugins: ['import-x', 'simple-import-sort', 'sort-keys-fix'],
  rules: {
    'import-x/first': 'error',
    'import-x/newline-after-import': 'error',
    'import-x/no-cycle': 'error',
    'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
      ],
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: true,
      },
      rules: {
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { fixStyle: 'inline-type-imports', prefer: 'type-imports' },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-misused-promises': [
          'error',
          { checksVoidReturn: { attributes: false } },
        ],
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/only-throw-error': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
      },
    },
    {
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:tailwindcss/recommended',
      ],
      files: ['*.jsx', '*.tsx'],
      rules: {
        'react/jsx-sort-props': [
          'error',
          {
            callbacksLast: true,
            ignoreCase: true,
            noSortAlphabetically: false,
            reservedFirst: true,
            shorthandFirst: true,
            shorthandLast: false,
          },
        ],
        'react/prop-types': 'off',
        'tailwindcss/no-custom-classname': 'off',
      },
      settings: {
        react: { version: 'detect' },
      },
    },
  ],
  reportUnusedDisableDirectives: true,
};
