# Weather Comparitor

[![Netlify Status](https://api.netlify.com/api/v1/badges/552511d9-1464-4cbd-9016-197eda1d0d22/deploy-status)](https://app.netlify.com/sites/laughing-bardeen-92a979/deploys)

Welcome to my little weather comparitor app! 
I would really like to move cities one day,
and one of my criteria is that the weather be nicer,
so I made this app to help me ensure that!

## Contribution guide

You're welcome to contribute! Most things are automated so all you have to do is write 
application code.

### Requirements

Node.js 12.x

### Setting up a development environment

```bash
git clone https://github.com/bartius-nigel/weather-comparitor.git
```
```bash
npm install
```
```bash
npm run dev
```

Code away!

This repo is formatted with Babel so you can write in any complicated syntax you like.

### Git workflow and CI pipeline

#### issue tracking

You can take a look at the issues documented or supply your own. To take responsibility for an issue,
just comment on the issue page that you are working on it, create a branch and develop as you like. 
Branch names or commit messages don't need to follow any convention.

#### running the tests and linter locally

When you're done writing your awesome code, you can:

check your code format:
```bash
npm run lint
```

or prettify your code automagically:
```bash
npm run prettify
```

and finally, run the tests:
```bash
npm run build
npm run test
```

#### making a pull request

Link your issues to your PRs by including a comment in the PR like so:

closes #<ISSUE_NUMBER>

This will move any issues around on the project board if there is one. 

The PR will need one approval and one succesful test run, otherwise a merge will be impossible.

### Writing tests

You must write tests for any svelte components that you create. The testing framework used is [Jest](https://jestjs.io/en/),
which also provides the assertions. Babel is included so that the tests can be written in ES6 syntax.
The testing engine used is [Testing-Library](https://testing-library.com/docs/svelte-testing-library/intro).

### Production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), 
which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

### Deployment

This application is deployed with Netlify. Everytime a PR is merged into master,
Netlify will detect that change and immidiately start building the app.

The Netlify configuration file is located in the root directory as `netlify.toml`.

Click on the badge to be taken to the Netlify dashboard [![Netlify Status](https://api.netlify.com/api/v1/badges/552511d9-1464-4cbd-9016-197eda1d0d22/deploy-status)](https://app.netlify.com/sites/laughing-bardeen-92a979/deploys)

# License

Copyright 2020 Nigel Cox

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
