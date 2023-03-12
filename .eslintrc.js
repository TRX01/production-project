module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/indent': [2, 4],
    'react/jsx-indent': [2, 4],
    indent: [2, 4],
    'no-trailing-spaces': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/comma-dangle': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/prefer-includes': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
  },
  globals: {
    __IS_DEV__: true
  }
};