# Prism UI

[![CI](https://github.com/freizo/prism-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/freizo/prism-ui/actions)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![version](https://img.shields.io/badge/version-0.1.0-5b4bff.svg)](package.json)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

A lightweight, framework-agnostic design-system framework. Design tokens plus accessible, zero-dependency components that work in plain HTML, React, Vue, Svelte, or anywhere CSS runs.

**[Live demo](https://freizo.github.io/prism-ui/)**

> 📸 Screenshot placeholder: add `docs/screenshot.png` and reference it here.

## Features
- 🎨 Design tokens as CSS variables: color, spacing, typography, radius, shadow
- 🌗 Light and dark themes (system preference + manual toggle)
- 🧩 8 primitives: button, input, card, badge, modal, tabs, toast, tooltip
- ♿ Accessibility first: native `<dialog>`, ARIA tabs with keyboard support, visible focus rings
- 📦 Zero dependencies, ~4 KB of CSS and a tiny ES module

## Quick start
```html
<link rel="stylesheet" href="node_modules/prism-ui/src/tokens.css">
<link rel="stylesheet" href="node_modules/prism-ui/src/components.css">
<button class="pr-btn">Hello</button>
<script type="module">
  import { init, toggleTheme, toast } from 'prism-ui';
  init(); toast('Welcome to Prism UI');
</script>
```
Override any token to rebrand: `:root{ --pr-color-primary:#e11d48; }`

## Components
| Component | Class / API |
|---|---|
| Button | `.pr-btn`, `--secondary`, `--danger` |
| Input | `.pr-input`, `.pr-label` |
| Card | `.pr-card`, `--raised` |
| Badge | `.pr-badge`, `--success/warning/danger` |
| Modal | `.pr-modal` on `<dialog>` |
| Tabs | `.pr-tabs` + `initTabs()` |
| Toast | `toast(message)` |
| Tooltip | `.pr-tooltip[data-tip]` |

## Roadmap
- [ ] Select, checkbox, radio, switch
- [ ] Web-component wrappers
- [ ] Token build pipeline (JSON → CSS/Figma)
- [ ] Accessibility audit and a11y test suite
- [ ] Theming guide and more built-in themes
- [ ] npm publish

## We're looking for contributors 🙌
Prism UI is young and you can shape it. We especially want:
- **Designers**: refine tokens, palettes and component visuals
- **Accessibility experts**: audit and improve keyboard/screen-reader support
- **Front-end developers**: build new components and framework wrappers
- **Writers**: docs, guides, examples

Check the [good first issues](https://github.com/freizo/prism-ui/labels/good%20first%20issue) and [help wanted](https://github.com/freizo/prism-ui/labels/help%20wanted), then read [CONTRIBUTING.md](CONTRIBUTING.md).

## Development
```bash
npm run check      # lint / sanity checks
npm run sync-docs  # copy src/* into docs/ for GitHub Pages
```
Open `docs/index.html` via any static server (ES modules need http), e.g. `npx serve docs`.

## License
[MIT](LICENSE) © freizo
