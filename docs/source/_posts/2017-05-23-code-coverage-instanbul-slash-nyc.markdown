---
layout: post
title: "Code coverage: Istanbul & nyc"
date: 2017-05-23 21:54:01 -0700
comments: true
categories: 
---

Code coverage for NodeJS projects.

<!--more-->

### Settings in `.nycrc` file

What is the standard code coverage settings look like?

``` json Example nycrc file
{
  "reporter": [
    "text-summary",
    "html",
    "lcov"
  ],
  "lines": 46,
  "statements": 47,
  "functions": 44,
  "branches": 35,
  "exclude": [
    "**/node_modules/**",
    "**/grunt/**",
    "**/public/**",
    "**/test/**",
    "i18n-express.js",
    "newrelic.js",
    "app.js",
    "Gruntfile.js",
    "scripts/**",
    "build/**"
  ],
  "extension": [
    ".js",
    ".jsx"
  ],
  "require": [
    "babel/register"
  ],
  "all": true,
  "check-coverage": true,
  "cache": true,
  "report-dir": "./build/coverage"
}
```

### `nyc` settings

Is it possible to specify the custom location of `.nycrc` file? Short answer: NO.

nycrc support is implemented in [this PR](https://github.com/istanbuljs/nyc/pull/391/files).
The relevant code for processing `.nycrc` file is in [this file](https://github.com/istanbuljs/nyc/blob/master/lib/config-util.js):

``` javascript .nycrc processing, extracted on May 20th 2017
// load config from a cascade of sources:
// * command line arguments
// * package.json
// * .nycrc
Config.loadConfig = function (argv, cwd) {
  cwd = cwd || process.env.NYC_CWD || process.cwd()
  var pkgPath = findUp.sync('package.json', {cwd: cwd})
  var rcPath = findUp.sync('.nycrc', {cwd: cwd})
  var rcConfig = null

  if (rcPath) {
    rcConfig = JSON.parse(
      fs.readFileSync(rcPath, 'utf-8')
    )
  }

...
```

The commandline arguments and their default values can be retrieved from `nyc help`, as shown belows:

``` plain Installing nyc
mymac:learn_grunt tdongsi$ npm i nyc -g
/Users/tdongsi/.nvm/versions/node/v4.6.1/bin/nyc -> /Users/tdongsi/.nvm/versions/node/v4.6.1/lib/node_modules/nyc/bin/nyc.js
nyc@10.3.2 /Users/tdongsi/.nvm/versions/node/v4.6.1/lib/node_modules/nyc

mymac:learn_grunt tdongsi$ which nyc
/Users/tdongsi/.nvm/versions/node/v4.6.1/bin/nyc

mymac:learn_grunt tdongsi$ nyc help config
nyc [command] [options]

run your tests with the nyc bin to instrument them with coverage
```

### References

* [Istanbul nyc](https://github.com/istanbuljs/nyc)