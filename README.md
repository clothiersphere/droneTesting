# Airware Hangar Manager App API Test Automation Framework

This is a test automation framework for the Airware Hangar Manager Application. 

The framework uses Mocha and Http requests 

The framework uses the following tools:

- [Mocha][mocha] : The most equivalent of TestNG in the NodeJS world
- [CO-Mocha][co-mocha] : Generator wrapper for Mocha
- [CO][co] : Generator flow goodness
- [CO-Request][co-request] : Generator-based http request library
- [Asserts][asserts] : We are using chai asserts

# Setting up

## Pre-requisites

Make sure you already have [Homebrew][homebrew] and [Caskroom][caskroom] setup.

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install caskroom/cask/brew-cask
```

We require Node so [Node][node] and [Npm][npm] will also be needed.

```
brew install node
brew install npm
```

## Installing

Run install in the root directory, this will install dependencies in `package.json`

```
npm install
```

# Running tests
The directions below assumes that `$FRAMEWORK_HOME` is the root directory of the framework :

```
~/apitest [master]$
```

## Running tests

The Mocha executable is already hooked up to the npm test run target.

For example running from `$FRAMEWORK_HOME`

```
$FRAMEWORK_HOME [master]$ npm test 
```

More resources: 

 - https://github.com/mochajs/mocha/issues/1677
 - https://github.com/mochajs/mocha/issues/1801
 - https://github.com/mochajs/mocha/issues/1338
 - http://stackoverflow.com/questions/14966821/testing-for-errors-thrown-in-mocha


[homebrew]: http://brew.sh
[caskroom]: http://caskroom.io/
[node]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[mocha]: http://mochajs.org/
[co]: https://github.com/tj/co
[co-mocha]: https://www.npmjs.com/package/mocha-co
[co-request]: https://www.npmjs.com/package/co-request
[asserts]: http://chaijs.com/api/assert/# droneTesting
