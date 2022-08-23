module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-useless-constructor': 0,
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowExpressions: true }
    ]
  }
}
