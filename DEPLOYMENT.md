# Deployment Guide

This project is automatically deployed to Netlify using GitHub Actions.

## Automatic Deployment

The deployment happens automatically when:

- Code is pushed to the `main` branch
- A Pull Request is merged into the `main` branch

## Setup Instructions

### 1. Netlify Setup (Already Done)

Your site is already configured on Netlify:

- **Site ID**: `7274b5a3-8e06-4e1d-9407-2e8767fc600a`
- **Site URL**: Available in your Netlify dashboard
- **Deploy Status**: [![Netlify Status](https://api.netlify.com/api/v1/badges/7274b5a3-8e06-4e1d-9407-2e8767fc600a/deploy-status)](https://app.netlify.com/projects/amit-sing-portfolio/deploys)

### 2. GitHub Secrets Configuration

To enable automatic deployment from GitHub Actions, add these secrets to your GitHub repository:

1. Go to your GitHub repository
2. Navigate to **Settings** > **Secrets and variables** > **Actions**
3. Add the following repository secrets:

**Required Secrets:**

- `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
- `NETLIFY_SITE_ID`: `7274b5a3-8e06-4e1d-9407-2e8767fc600a`

**To get your Netlify Auth Token:**

1. Go to [Netlify User Settings](https://app.netlify.com/user/applications#personal-access-tokens)
2. Click "New access token"
3. Give it a name (e.g., "GitHub Actions")
4. Copy the token and add it as `NETLIFY_AUTH_TOKEN` in GitHub secrets

### 3. Configuration Files

- `netlify.toml`: Netlify build configuration with redirects and headers
- `.github/workflows/deploy.yml`: GitHub Actions pipeline for automated deployment

## Manual Deployment (Optional)

You can also deploy manually using:

```bash
npm run deploy
```

Note: This requires the `gh-pages` package which is not included by default.

## Pipeline Details

The GitHub Actions pipeline:

1. **Triggers**: On push to main or merged PRs to main
2. **Build**: Installs dependencies, runs linting, and builds the project
3. **Deploy**: Uploads the built files to GitHub Pages
4. **URL**: Your site will be available at `https://username.github.io/my-portfolio/`

## Troubleshooting

- Check the "Actions" tab in your GitHub repository for build logs
- Ensure all dependencies are listed in `package.json`
- Verify that the build completes successfully locally with `npm run build`
