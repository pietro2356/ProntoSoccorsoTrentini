module.exports = {
  extends: ['@commitlint/config-angular', '@commitlint/config-conventional'],
  rules: {
    'body-max-length': [0, 'always', 200],
    'body-max-line-length': [0, 'always', 200],
  },
};
