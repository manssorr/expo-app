module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  overrides: [
    // Revert JSONC parsing:
    // https://github.com/prettier/prettier/issues/15553
    {
      files: ['**/*.jsonc'],
      options: {
        parser: 'json',
      },
    },
  ],
};
