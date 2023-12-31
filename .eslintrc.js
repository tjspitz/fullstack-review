module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    semi: ['error', 'always', { omitLastInOneLineBlock: false }],
    'react/prop-types': 0,
    'comma-dangle': ['error', 'always-multiline'],
  },
};
