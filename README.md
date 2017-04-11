# Signup demo ![](https://travis-ci.org/datyayu/signup-demo.svg?branch=master)

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

Please be aware that, due to [the latest react changes](https://facebook.github.io/react/blog/2017/04/07/react-v15.5.0.html), the tests may have some warnings because of the dependencies (specifically enzyme and redux-form) not having been updated with the 15.5 changes (`TestUtils` and `PropTypes`, respectively).

Will update as soon as they release a v15.5-compatible version.
