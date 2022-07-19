module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'es6': true,
    'jest': true,
    'node': true,
  },
  extends: [ 'eslint:recommended' ],
  ignorePatterns: [ 'coverage/*' ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  plugins: [
    '@typescript-eslint', 'react', 'import', 'import-newlines', 'simple-import-sort',
    'sort-keys-fix', 'unicorn', 'unused-imports',
  ],
  root: true,
  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      {
        'types': {
          'Boolean': {
            'fixWith': 'boolean',
            'message': 'Use boolean instead',
          },
          'Function': {
            'message': 'Be more specific',
          },
          'Number': {
            'fixWith': 'number',
            'message': 'Use number instead',
          },
          'Object': {
            'message': 'Define object type (ex. { foo: string, bar: number})',
          },          
          'String': {
            'fixWith': 'string',
            'message': 'Use string instead',
          },
          'Symbol': {
            'fixWith': 'symbol',
            'message': 'Use symbol instead',
          },
          '{}': {
            'message': 'Define object type (ex. { foo: string, bar: number})',
          },
        },
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error', {
        'multiline': {
          'delimiter': 'comma',
          'requireLast': true,
        },
        'singleline': {
          'delimiter': 'comma',
          'requireLast': false,
        },
      },
    ],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'array-bracket-newline': [
      'warn',
      {
        minItems: 5,
        multiline: true,
      },
    ],
    'array-bracket-spacing': [ 'warn', 'always' ],
    'array-element-newline': [ 'off' ],
    'arrow-body-style': [ 'warn', 'as-needed' ],
    'arrow-parens': [ 'warn', 'always' ],
    'arrow-spacing': [ 'warn' ],
    'block-spacing': [ 'warn' ],
    'brace-style': [ 'warn' ],
    'comma-dangle': [
      'error', {
        'arrays': 'always-multiline',
        'exports': 'never',
        'functions': 'never',
        'imports': 'never',
        'objects': 'always-multiline',
      },
    ],
    'comma-spacing': [ 'warn' ],
    'comma-style': [ 'warn', 'last' ],
    complexity: [ 'warn', 20 ],
    'dot-location': [ 'warn', 'property' ],
    'func-call-spacing': [ 'warn', 'never' ],
    'func-style': [ 'warn', 'declaration', { 'allowArrowFunctions': true } ],
    'function-call-argument-newline': [ 'warn', 'consistent' ],
    'function-paren-newline': [ 'warn', 'multiline-arguments' ],
    'import-newlines/enforce': [
      'error',
      {
        'items': 2,
        'max-len': 120,
        'semi': false,
      },
    ],
    'import/default': [ 'warn' ],
    'import/export': [ 'warn' ],
    'import/first': [ 'warn' ],
    'import/newline-after-import': [
      'warn',
      {
        count: 1,
      },
    ],
    'import/no-absolute-path': [ 'warn' ],
    'import/no-duplicates': [ 'warn' ],
    'import/no-mutable-exports': [ 'warn' ],
    'import/no-named-as-default': [ 'warn' ],
    'import/no-named-default': [ 'warn' ],
    'import/no-namespace': [ 'warn' ],
    'import/no-self-import': [ 'warn' ],
    'import/no-useless-path-segments': [ 'warn' ],
    'import/no-webpack-loader-syntax': [ 'warn' ],
    'indent': [
      'error', 2, {
        'SwitchCase': 1,
        ignoredNodes: [
          'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier',
          'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute',
          'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement',
          'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText',
          'JSXEmptyExpression', 'JSXSpreadChild',
        ],
      },
    ],
    // due to jest-expect-message, we'll often have two args instead of what this plugin expects
    'jest/valid-expect': [ 'off' ],
    'key-spacing': [ 'warn' ],
    'max-len': [
      'warn',
      {
        code: 120,
        comments: 180,
        tabWidth: 2,
      },
    ],
    'max-params': [ 'warn', 5 ],
    'max-statements': [ 'warn', 60 ],
    'multiline-ternary': [ 'warn', 'always-multiline' ],
    'newline-per-chained-call': [ 'warn' ],
    'no-bitwise': [ 'off' ],
    'no-console': [ 'warn' ],
    'no-constant-condition': [ 'warn' ],
    'no-duplicate-imports': [ 'off' ], // see imports/no-duplicate instead
    'no-else-return': [ 'warn' ],
    'no-lonely-if': [ 'warn' ],
    'no-loop-func': [ 'warn' ],
    'no-mixed-spaces-and-tabs': [ 'error', 'smart-tabs' ],
    'no-multi-spaces': [ 'warn' ],
    'no-shadow': 'off',
    'no-tabs': [ 'warn' ],
    'no-unused-vars': 'off',
    'no-warning-comments': [ 'warn' ],
    'no-whitespace-before-property': [ 'warn' ],
    'object-curly-newline': [
      'warn',
      {
        // 'ImportDeclaration': { 'minProperties': 2, 'multiline': true },
        'ObjectExpression': { consistent: true, 'minProperties': 4 },
        'ObjectPattern': { consistent: true, 'minProperties': 4 },
      },
    ],
    'object-curly-spacing': [ 'warn', 'always' ],
    'one-var': [
      'warn',
      {
        const: 'never',
        let: 'never',
        var: 'never',
      },
    ],
    'prettier/prettier': [ 'off' ],
    quotes: [ 'error', 'single' ],
    'react/jsx-boolean-value': [ 'warn', 'always' ],
    'react/jsx-child-element-spacing': [ 'warn' ],
    'react/jsx-closing-bracket-location': [ 'warn', 'props-aligned' ],
    'react/jsx-closing-tag-location': [ 'warn' ],
    'react/jsx-curly-newline': [
      'warn',
      {
        multiline: 'consistent',
        singleline: 'consistent',
      },
    ],
    'react/jsx-curly-spacing': [
      'warn',
      {
        when: 'never',
      },
    ],
    'react/jsx-equals-spacing': [ 'warn', 'never' ],
    'react/jsx-first-prop-new-line': [ 'warn' ],
    'react/jsx-indent': [
      'warn',
      2,
      {
        checkAttributes: false,
        indentLogicalExpressions: true,
      },
    ],
    'react/jsx-indent-props': [ 'warn', 2 ],
    'react/jsx-max-props-per-line': [ 'warn' ],
    'react/jsx-one-expression-per-line': [
      'warn',
      {
        allow: 'single-child',
      },
    ],
    'react/jsx-sort-props': [ 'warn' ],
    'react/jsx-wrap-multilines': [ 'warn' ],
    semi: [ 'warn', 'always' ],
    'semi-spacing': [
      'warn',
      {
        after: true,
        before: false,
      },
    ],
    'semi-style': [ 'warn' ],
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Side effect imports first
          [ '^\\u0000' ],

          // React related imports second
          [ '^react\\.*' ],

          // NPM imports next
          [ '^(?!(components|constants|model|screens|routes|services|types|util))\\w', '^(@)' ],

          // Our non-relative imports next
          [ '^(components|constants|model|screens|routes|services|types|util)' ],

          // Local imports
          [ '^\\.' ],
          
          // Style imports.
          [ '^.+\\.?(css)$' ],
        ],
      },
    ],
    'sort-imports': [ 'off' ],
    'sort-keys-fix/sort-keys-fix': 'warn',
    'space-in-parens': [ 'warn', 'never' ],
    'switch-colon-spacing': [ 'warn' ],
    'template-curly-spacing': [ 'warn', 'always' ],
    'template-tag-spacing': [ 'warn', 'never' ],
    'unicorn/better-regex': [ 'warn' ],
    'unicorn/catch-error-name': [ 'warn' ],
    'unicorn/error-message': [ 'warn' ],
    'unicorn/no-array-instanceof': [ 'warn' ],
    'unicorn/no-keyword-prefix': [ 'off' ],
    'unicorn/no-unreadable-array-destructuring': [ 'warn' ],
    'unicorn/prefer-includes': [ 'warn' ],
    'unicorn/prefer-negative-index': [ 'warn' ],
    'unicorn/prefer-number-properties': [ 'warn' ],
    'unicorn/prefer-set-has': [ 'warn' ],
    'unicorn/prefer-starts-ends-with': [ 'warn' ],
    'unused-imports/no-unused-imports': 'error',
  },
};