# M4 Mocha Tests 🚀

This repo contains a test suite for the M4 project.  It is meant to streamline assessing your project and act as an alternative to the Comprehensive Test Collection in Postman.

## Quick Start

- Clone this repo and cd into this directory.
- Run: `npm install`.
- Update the base url in [`test/utils/constants`](./tests/utils/constants.mjs) ⭐
- Run: `npm test`.

## Running the Tests

To get the test working, ensure you've configuired the following have the following:

- Update the base url to point to your live site on Render or your local server.
- Ensure your server is running, or your live site is up and running.
- [`test/utils/constants`](./tests/utils/constants.mjs) is the only place you'll need to make a change.

Use `npm test` to run all of the tests.  The test results will map 1-to-1 with your Scorecard.
