module.exports = {
  root: false,
  extends: 'next/core-web-vitals',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
};
