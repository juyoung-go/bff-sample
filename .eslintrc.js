module.exports = {
  env: {
    browser: false,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  ignorePatterns: [
    'build',
    'dist',
    'node_modules'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ['@typescript-eslint', 'sort-keys-fix'],
  rules: {
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/extensions': 'off',
    'import/named': 'off',
    'import/no-anonymous-default-export': 'error',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
        'newlines-between': 'always',
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-unused-vars': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
    'require-jsdoc': 'off',
    'sort-keys-fix/sort-keys-fix': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js'],
    },
    react: {
      version: 'detect',
    },
  },
}