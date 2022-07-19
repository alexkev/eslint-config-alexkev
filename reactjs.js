module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'es6': true,
    'jest': true,
    'node': true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', 
    './.eslintrc.js',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [ '@typescript-eslint' ],
  root: true,
  settings: {
    'react': {
      'version': 'detect',
    },
  },
};