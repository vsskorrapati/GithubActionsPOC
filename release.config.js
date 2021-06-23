module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/KVSaiSandeep/GithubActionsPoc1",
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
