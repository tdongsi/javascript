---
layout: post
title: "Tutorial: Quick-start for JavaScript Programming Test"
date: 2017-06-21 00:58:03 -0700
comments: true
categories: 
- Javascript
- Tutorial
- TODO
---

For timed programming tests, new test-takers usually underestimate how short two and a half hours can be (more [here](https://tdongsi.github.io/java/blog/2016/08/29/tutorial-timed-programming-test/)). 
This post lists out steps to get started quickly for a JavaScript programming test, using React.

<!--more-->

Using this boiler plate https://github.com/davezuko/react-redux-starter-kit

For example, build the followings:

* As a player I want to move my objects around the screen using the keyboard (or any preferred input device)
* If the object meets other objects in the screen, give some feedback.

### Start an empty project



### Add unit testing

``` plain Unit testing with Jasmine
# Add Jasmine to your package.json
npm install --save-dev jasmine

# Initialize Jasmine in your project
./node_modules/.bin/jasmine init

# Set jasmine as your test script in your package.json
"scripts": { "test": "jasmine" }

# Run your tests
npm test
```
