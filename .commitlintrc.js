/**
 * @see https://commitlint.js.org/#/guides-local-setup
 * @see https://stackoverflow.com/questions/60194822/how-do-you-configure-commitlint-to-ignore-certain-commit-messages-such-as-any-th
 * type must be one of ['build', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'chore', 'wip']
 */
module.exports = {
  // ignores: [(commit) => commit.includes('initial')],
  extends: ['gitmoji'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'comments',
        'initial',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'upgrade',
        'downgrade',
        'chore',
        'release',
        'rename',
        'remove',
        'revert',
      ],
    ],
  },
};
