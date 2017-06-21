module.exports = {
  extends: 'airbnb-base',
  plugins: ['import'],
  rules: {
    semi: ['error', 'never'],
    'no-unused-vars': ['error', { vars: 'local' }],
  },
  globals: {
    Logger: true,
  },
}
