# Weather Comparitor

[![Netlify Status](https://api.netlify.com/api/v1/badges/552511d9-1464-4cbd-9016-197eda1d0d22/deploy-status)](https://app.netlify.com/sites/laughing-bardeen-92a979/deploys)

![Node.js CI](https://github.com/bartius-nigel/weather-comparitor/workflows/Node.js%20CI/badge.svg)

Welcome to my little weather comparitor app!
This little app will help you compare the weather in any city
to any other city you want. Make packing for your next vacation
just that much simpler!

## Contribution guide

You're welcome to contribute! Most things are automated so all you have to do is write
application code.

### Requirements

Node.js 12.x

### Setting up a development environment

This project can be completely run using `Docker` and `docker-compose`. **By doing that, we guarantee the application run using an unified environment**. You can find out more at [Compose command-line reference](https://docs.docker.com/compose/reference/).

```bash
git clone https://github.com/bartius-nigel/weather-comparitor.git
```
```bash
docker-compose up -d weather-app
```
```bash
./run.sh npm install
```
```bash
# served at http://localhost:5000 by default
./run.sh npm run dev
```

Basic syntax for command execution inside the container in case you don't use a command line with bash:
```bash
# Just switch "./run.sh" for "docker-compose exec weather-app"
docker-compose exec weather-app [COMMAND] [PARAMS] [ARGS]
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
./run.sh npm run lint
```

or prettify your code automagically:
```bash
./run.sh npm run prettify
```

and finally, run the tests:
```bash
./run.sh npm run build
./run.sh npm run test
```

#### making a pull request

Link your issues to your PRs by including a comment in the PR like so:

closes #<ISSUE_NUMBER>

This will move any issues around on the project board if there is one.

The PR will need one approval and one succesful test run, otherwise a merge will be impossible.

### Writing tests

If it's possible, write some tests for any svelte components or logic files that you create. The testing framework used is [Jest](https://jestjs.io/en/),
which also provides the assertions. Babel is included so that the tests can be written in ES6 syntax.
The testing engine used for svelte components is [Testing-Library](https://testing-library.com/docs/svelte-testing-library/intro).

### Production mode

To create an optimised version of the app:

```bash
./run.sh npm run build
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
