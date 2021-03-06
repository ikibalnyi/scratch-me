module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'prettier/prettier': 1,
    '@typescript-eslint/explicit-function-return-type': [2, { allowExpressions: true }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-use-before-define': [2, { functions: false }],
    'import/order': [
      2,
      {
        groups: [
          ['builtin', 'external'],
          ['unknown', 'internal', 'parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/default': 0,
    'import/export': 0,
    'import/named': 0,
    'import/namespace': 0,
    '@typescript-eslint/require-await': 0,
  },
  overrides: [
    {
      files: ['src/@fp/**'],
      rules: {
        'no-restricted-imports': [2, { patterns: ['fp-ts/es6/*', 'fp-ts/lib/*'] }],
      }
    }
  ],
};
