# bootstrap-assets-for-xd.github.io

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Publish

https://6qd.github.io/bootstrap-xd-guide/

This GitHub Pages site is currently being built from the /docs folder in the master branch.
So if you'd like to publish your change, type this before push your commit.

```
$ yarn generate
```

This makes to generate `/dist` and auto copy it to `docs`.
And the owner merge the PR and release.
