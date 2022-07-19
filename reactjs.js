module.exports = {
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