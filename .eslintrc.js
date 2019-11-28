module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential'],
  plugins: ['vue'],
  rules: {
    'no-alert': 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
