module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/vsskorrapati/GithubActionsPOC.git",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        assets: [
          {
            path: "coverage.zip",
            label: "Coverage",
          },
        ],
      },
    ],
  ],
};
