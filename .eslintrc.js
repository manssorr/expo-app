module.exports = {
  root: true,
  plugins: ['module-resolver'],
  extends: [
    'universe',
    'universe/native',
    'universe/web',
    'universe/shared/typescript-analysis',
  ],
  rules: {
    // Eslint Module Resolver
    'module-resolver/use-alias': 2,

    // Ensures props and state inside functions are always up-to-date
    'react-hooks/exhaustive-deps': 'warn',

    // React specific
    'react-hooks/exhaustive-deps': 'off',
    'react/no-unstable-nested-components': ['off', { allowAsProps: true }],
    'react-native/no-inline-styles': 'off',
    'react-native/no-color-literals': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-key': [1, { checkFragmentShorthand: true }],

    // Note: you must disable the base rule as it can report incorrect errors
    'no-unused-vars': ['off'],
    'unused-imports/no-unused-imports': ['warn'],
    '@typescript-eslint/no-unused-vars': ['warn'],

    // Note: you must disable the base rule as it can report incorrect errors
    'no-shadow': 'off',
    // skip shadow with function parameters
    '@typescript-eslint/no-shadow': [
      'warn',
      { ignoreFunctionTypeParameterNameValueShadow: true },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
