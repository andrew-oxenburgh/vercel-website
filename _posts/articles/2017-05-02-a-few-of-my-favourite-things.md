---
layout: page
title: A few of my favourite thingies
categories: blog
excerpt:
tags: []
image:
  feature:
date: 2017-05-02
---

# Definitely under construction

| git| github| python|javascript|
|css|sass|html|jQuery|

## Things to remember for new JS project

1. Create in github and clone it locally
1. npm init
1. npm install --save-dev mocha chai eslint jsdoc2md
1. README.md
### eslint
```
env:
  es6: true
extends:
  - 'eslint:recommended'
parserOptions:
  ecmaFeatures:
    experimentalObjectRestSpread: true
  sourceType: module
rules:
  indent:
    - warn
    - 4
  linebreak-style:
    - error
    - unix
  quotes:
    - error
    - single
  semi:
    - error
    - always
  max-depth:
    - error
    - 6
  complexity:
    - error
    - 6

```
### .gitignore
```

# dependencies
/node_modules

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

.idea/

**/*.css

```

### initial mocha test


```
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

```

### Sample package file

```
{
  "name": "various-factorials",
  "version": "1.0.1",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "mocha src/**/*.test.js",
    "lint": "eslint ./src/ --fix",
    "qa": "npm run lint && npm test && npm run doc",
    "doc": "jsdoc2md ./src/factorial/factorial.js > JSDOC.md"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/andrew-oxenburgh/various-factorials.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/andrew-oxenburgh/various-factorials/issues"
  },
  "homepage": "https://github.com/andrew-oxenburgh/various-factorials#readme",
  "devDependencies": {
    "eslint": "^4.7.2",
    "jsdoc-to-markdown": "^3.0.0",
    "mocha": "^3.5.3",
    "mocha-each": "^1.1.0"
  }
}

```
