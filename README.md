# webpack-knowledge-check

Part 2 of a 3 part series where we test and assert general knowledge in understanding and setting up Webpack.
Please read this entire document to best decide which approach you'd like to take. 

## Overview

Please see [Part 1](https://github.com/aquent-it-solutions/babelize) before moving on the this section.

The aim of this section is to assert the knowledge of the [NPM package webpack](https://webpack.js.org/). As such, this repo is project based and will simply present requirements to get setup with bundling. 

### Requirements

Successful completion of this knowledge-check means satisfying the following requirements:

1. Converting an existing project to take advantage of webpack bundling.
2. Generating a `webpack.config.js` to ease development.
3. Creating proper scripts in your `package.json` to respond to relevant `start`/`build` situations.
4. Submitting a *proper* PR that adheres to our discussed PR process. 

### Webpack tools

The `webpack.config.js` should be able to accomodate the following:

- [ ] Initiate babel to perform transpilation of `es2015`, `es2016`, `es2016+`, and `react` 
- [ ] Serve files using a _dev_ elopment _server_
- [ ] A simple `source-map` for easy development debugging
- [ ] The ability to import `CSS` and `Images`
- [ ] Enable Hot Reloading as a fallback to the development server
- [ ] Configure `HTMLWebpack Plugin` to automatically generate an `.html` in `/dist`. This generated file should have a different `title`.

Additionally, `package.json` should contain relevant `scripts` to accomodate the following:

- [ ] _build_ webpack to generate a 1 time, production-ready bundle
- [ ] _watch_ files and generate a new bundle every save
- [ ] open a new tab when in watch mode

### Notes

This project, as with many others, is kept intentionally vague of where to look.  All information can be found the the official docs. However, since *this project is meant to be completed independently*, googling solutions, looking at previous code, etc is allowed--be prepared for the rabbit hole this may lead to. **You're expected to get stuck**, especially since there are many ways to configure your bundle--hang in there and push through.

### Brownie Points

This project contains sample code to work with so that time isn't spent deciding what to test your work against.  However, if feeling ambitious, special notes will be made for those that can successfully refactor the [multiple-gifs](https://github.com/aquent-it-solutions/gif-loader/tree/multiple-gifs) project to take advantage of your `webpack` seed **and** react. 
