# Juice Eshop UI Tests

This project contains UI tests for the Juice Eshop. Some tests might fail due to current bugs in application.
Tests assume a new instance of the application.

## Requirements
-Node.js LTS  
-NPM (Yarn)

## Setup/Configuration

Install dependencies:
```sh
npm install
```

Before running tests, update the playwright.config.js file to include the target application's base URL:

```js
// playwright.config.js
const config = {
  use: {
    baseURL: 'http://localhost:3000', // Replace with your application's URL
  },
};

module.exports = config;
```


## Running UI Tests

```sh
npx playwright test
```


## Running Tests in Debug Mode

On Windows
```sh
set DEBUG=pw:api && npx playwright test

On Linux
```sh
DEBUG=pw:api npx playwright test
```

## Running Single Test

```sh
npx playwright test -g "Verify maximum products per page"
```