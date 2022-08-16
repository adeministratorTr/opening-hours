# Getting Started with Create React App

This project was little tiny POC for listing working hours of business/restaurant. Also, it bootstrapped with CRA and typescript.

You can change the view by playing with data file.

If you want to change `TODAY` badge, you can update `showTodayBadge` function with certain day. Lets assume you want to show badge on Friday. Then you can update function like this:

```js
const today = new Date('2022-08-19').toLocaleString('en-us', { weekday: 'long' });
```

## Contributing

You can create a PR but first, please run `npm run format`. I'll add some pre-push/pre-commit rule later on.

## Available Scripts

In the project directory, first you should run `npm install` and then, you can run one of the commands:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Testing

There are 2 different tools for different purposes in this project. You can run `npm test` for unit tests.

Since its not deployed anywhere, before running any e2e/cypress test command, you should run project first. And then, you can use `npm run cy` to just run tests.

If you want to video, then `npm run cy:open`. In that case you need to go through cypress UI and select 'E2E Testing' and then select a browser.

For coverage, you can use `npm test:coverage` command.

## ToDos

- [ ] Add pre-commit/pre-push for linting
