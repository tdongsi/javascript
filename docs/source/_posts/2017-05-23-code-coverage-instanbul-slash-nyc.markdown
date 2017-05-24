---
layout: post
title: "Code coverage: Instanbul && nyc"
date: 2017-05-23 21:54:01 -0700
comments: true
categories: 
---

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

