# M4 Testing Automations

This repo contains a test suite for the M4 project.  It is meant to streamline assessing your project and act as an alternative to the Comprehensive Test Collection in Postman.

## Setup and Usage
It's fairly straightforward directions to get started:

- Clone this repo and cd into the directory.
- Run: `npm install`.
- Update the base url in [`test/utils/constants`](./tests/utils/constants.mjs) ⭐
- Run: `npm test`.

## Testing

You can point the base url at your live site on Render or your local server.  [`test/utils/constants`](./tests/utils/constants.mjs) is where you will change the base url to point to your Render API url.

The test results will map 1-to-1 with your Scorecard.
