module.exports = {
  release: {
    branches: ['master'],
  },
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
        "@semantic-release/npm",
        {
            "npmPublish": false
        }
    ],
    [
      '@semantic-release/github',
      {
        assets: [],
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message: 'chore(release): ${nextRelease.gitTag} [skip ci]',
      },
    ],
  ],
};
