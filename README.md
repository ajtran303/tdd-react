# tdd-react

Exploring Test Driven Development with React.

## Installation and Context

Clone the repo. Use `npm test` to run Jest, which handles pretty much all of the test automation. I recommend just keeping that console window open on its own. It runs in `watch` mode, and will auto-refresh on file saves.

## Current tests

### App

Test that component can receive props.

- exists
- has a greeting
- can have a different greeting

### HiddenMessage

Test that component "toggles" when clicked.

- exists
- shows children when checkbox is checked

## Libraries

All of these packages are included and pre-configured with `create-react-app`. Nice!

- `jest` - it's what's used to test react
- `testing-library/react` - provides API for interacting with components
- `testing-library/jest-dom` - provides extra matchers for assertions

## Resources

- _Running Tests_ - [Create React App](https://create-react-app.dev/docs/running-tests)

- _Debugging Tests_ - [Create React App](https://create-react-app.dev/docs/debugging-tests)

- _Jest DOM Matchers_ - [testing-library/jest-dom](https://github.com/testing-library/jest-dom)

- _React Testing Library_ - [testing-library/react](https://github.com/testing-library/react-testing-library)

## Next steps

TODO: The [Jest tutorial](https://jestjs.io/docs/en/tutorial-react), specifically snapshot testing
