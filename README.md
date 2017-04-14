# Signup demo [![](https://travis-ci.org/datyayu/signup-demo.svg?branch=master)](https://travis-ci.org/datyayu/signup-demo)

Multi-step signup build using react + redux.

Demo available at: [https://yayu-signup-demo.herokuapp.com/](https://yayu-signup-demo.herokuapp.com/ )

Please be aware this is a free dyno, so it may take up to a minute to load the first time.

## Installation
Just `cd` into the project and run
```sh
$ yarn install # Or npm install
```

## Running
For dev server run
```sh
$ yarn start # Or npm start
```

For production server with SSR, run
```sh
$ yarn serve # Or npm run serve
```

## Testing
To run the tests you can use:
```sh
$ yarn test # Or npm test
```

Please be aware that some warnings may appear when running the tests (something like `Warning: Unknown prop 'jsx' on <style> tag`). This is an ongoing issue with styled-jsx, and will fix as soon as possible.
