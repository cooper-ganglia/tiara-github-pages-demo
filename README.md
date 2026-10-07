# Tiara’s idea studio

A personal, interactive demonstration built with Codex and hosted on GitHub Pages.

**Live website:** https://cooper-ganglia.github.io/tiara-github-pages-demo/

## Structure

- `index.html` — content, navigation, interactive preview, prompts, and FAQs.
- `styles.css` — responsive layout, light/dark themes, and CSS illustrations/animation.
- `script.js` — concept and palette switching, saved theme preference, and prompt copying.
- `favicon.svg` — the studio’s flower mark.
- `.nojekyll` — serves the static files directly without Jekyll processing.

There is no build step or dependency installation. Fonts load from Google Fonts with system fallbacks. All illustrations are CSS; the preview concepts are illustrative examples, not separate real websites. Theme preference is stored only in the visitor’s browser.

## Preview locally

From this folder, run `python3 -m http.server 8000` and visit http://localhost:8000. Stop the server with Ctrl+C.

## Deployment

GitHub Pages is configured to deploy the root of the `main` branch. Every push to `main` automatically triggers GitHub’s Pages build and deployment. Check the repository’s Actions tab for its status; publishing may take a few minutes.

## Make future edits with Codex

Open this repository folder in Codex and describe the change. For example:

> Add a section introducing Tiara’s newest project. Match the existing design, check mobile and desktop layouts and interactive features, then commit and push the update to GitHub. Verify the live GitHub Pages site afterward.

Review changes before publication. Keep API keys, passwords, and other secrets out of these public files. GitHub Pages serves static content; forms that send email, authentication, or databases require a separate service.

## Features to explore

Switch ideas and palettes in the playground; toggle light/dark mode; copy a prompt; expand FAQs; follow the section links. Keyboard focus, live announcements, and reduced-motion preferences are supported.
