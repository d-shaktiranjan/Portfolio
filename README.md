# Setup

Install the latest version of [Node JS](https://nodejs.org/en/)

Enable [pnpm](https://pnpm.io/)
```
corepack enable
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
# Home page company section
VITE_SHOW_COMPANY_SECTION=
VITE_COMPANY_NAME=
VITE_COMPANY_URL=
VITE_COMPANY_ROLE=

# Blog section
VITE_BLOG_BRANCH=
VITE_BLOG_BASE_URL=
```

And 
```
pnpm run dev
```
