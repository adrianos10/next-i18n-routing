module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      './tsconfig.eslint.json',
      './packages/*/tsconfig.json',
      './examples/*/tsconfig.json',
    ],
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  ignorePatterns: ['!.eslintrc.js'],
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
    'prettier',
  ],
  rules: {
    'no-console': 'error',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'block' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block', next: '*' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^@?\\w'],
          ['^src'],
          ['^'],
          ['^\\.'],
          ['^.+\\u0000$'],
        ],
      },
    ],
  },
  env: {
    node: true,
  },
  settings: {
    next: {
      rootDir: ['examples/next-v12-router/', 'examples/next-v13-router/'],
    },
  },
};
