# Setup

Install the latest version of [Node JS](https://nodejs.org/en/)

Enable [pnpm](https://pnpm.io/) through Corepack

```
corepack enable
corepack prepare pnpm@10.34.3 --activate
```

Now, install the packages

```
pnpm install
```

then make .env file

```
touch .env
```

Then add variables

```
# Blog section
VITE_BLOG_BRANCH=
VITE_BLOG_BASE_URL=
```

And

```
pnpm run dev
```

## Vercel

This project pins `pnpm@10.34.3` in [package.json](/Users/shakti/Developer/Projects/Portfolio/package.json:31).
To make Vercel use that version instead of falling back to pnpm 9, set the environment variable `ENABLE_EXPERIMENTAL_COREPACK=1` in your Vercel project settings.
