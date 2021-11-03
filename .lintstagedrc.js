module.exports = {
  "**/*.{ts,tsx,js}": ["eslint --fix"],
  "**/*.{ts,tsx,js,jsx,json,css,scss,html,md,mdx,yml,gql,graphql}": [
    "prettier --write",
  ],
};
