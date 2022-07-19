module.exports = {
  extends: [
    '@react-native-community',
    './.eslintrc.js',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [ '@typescript-eslint', 'react-native' ],
  root: true,
  rules: {
    'react-native/no-unused-styles': [ 'error' ],
  },
};