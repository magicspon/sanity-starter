# typesafe sanity starter

This repo uses `pnpm`

## Getting started

1. Install dependencies `pnpm i`
2. Copy `.env.example` to apps/cms/.env + apps/site/.env.local.
3. Update envirnonmental variables
4. `pnpm dev` to start coding.

## Features

- Sanity
- Typescript
- Tailwind
- Nextjs
- Storybook
- Hygen
- Cypress (e2e and component testing)
- Eslint
- Jest
- Prettier
- Commitlint
- Lintstaged
- Github Actions

## Structure

It uses [Turborepo](https://turborepo.org/) and contains:

```
.github
  └─ workflows
        └─ main ci workflow (lint/test)
        └─ ci e2e tests
cypress
  └─ e2e
      ├─ e2e tests
apps
  └─ cms
      ├─ Sanity
  └─ site
      ├─ Next.js 13
      ├─ React 18
      ├─ TailwindCSS
packages
 └─ config
     └─ eslint eslint config
     └─ tailwindcss tailwindcss config
     └─ jest jest config
 └─ ui
     └─ design system with storybook
```

#### Path Alias

`~` points to src/\*

Warning: Do _not_ use this alias if you need to share the file between packages

```javascript
import { Header } from '~components/Header'
```

`@ui` points to packages/ui/src directory.
`@cms` points to apps/cms
