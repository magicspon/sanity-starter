const rules = {
  ON: 2,
  OFF: 0,
  WARN: 1,
}

module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    node: true,
    es6: true,
  },
  overrides: [
    {
      files: ['**/__tests__/**/*'],
      env: {
        jest: true,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'turbo',
    'plugin:import/typescript',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': rules.WARN,
    '@typescript-eslint/no-empty-interface': rules.OFF,
    '@typescript-eslint/no-explicit-any': rules.OFF,
    '@typescript-eslint/no-non-null-assertion': rules.OFF,
  },
}
