[![CircleCI](https://circleci.com/gh/debtcollective/student-debt-campaign.svg?style=svg)](https://circleci.com/gh/debtcollective/student-debt-campaign)

# Student debt campaign landing page

Provisional landing page for the student debt campaign.

## Installation

1. `cp env.sample .env.development` and fill the variables
2. `yarn install`

### Mailchimp Endpoint

We are using [gatsby-plugin-mailchimp](https://github.com/benjaminhoffman/gatsby-plugin-mailchimp) to handle our mailing list subscriptions. Follow these instructions to get the endpoint https://github.com/benjaminhoffman/gatsby-plugin-mailchimp#mailchimp-endpoint

## Development

```
yarn dev
```

## Deploy

### Github

```
yarn build:github
yarn deploy
```
