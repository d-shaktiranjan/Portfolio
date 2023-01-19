# Setup

Install the latest version of [Node JS](https://nodejs.org/en/)

Install [yarn](https://yarnpkg.com/getting-started/install)
```
corepack enable
```

Now, run the following in the project directory

```
yarn install
```
then make .env file 
```
touch .env
```
Then add variables
```
REACT_APP_IS_IN_LOCAL=true
REACT_APP_BLOG_BRANCH=
REACT_APP_BLOG_BASE_URL=
```
(In development environment ```REACT_APP_IS_IN_LOCAL=true```, in production change this to ```REACT_APP_IS_IN_LOCAL=false```.
When ```REACT_APP_IS_IN_LOCAL=true```, you can access the blog testing page in /blog-test endpoint.) 

And 
```
yarn start
```