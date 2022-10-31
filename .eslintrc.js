module.exports = {
  root: true,
  extends: ['custom'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.eslint.json',
      './packages/*/tsconfig.json',
      './examples/*/tsconfig.json',
    ],
  },
  settings: {
    next: {
      rootDir: ['examples/next-v12-router/', 'examples/next-v13-router/'],
    },
  },
};
