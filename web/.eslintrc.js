module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  plugins: ['react', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['warn', 'prefer-single'],
    'react/prop-types': 'off',
  },
}
