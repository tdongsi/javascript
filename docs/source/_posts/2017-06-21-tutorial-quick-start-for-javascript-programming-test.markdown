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

``` plain Starting a Node project
# Init by creating package.json file
npm init
# Answer questions to create package.json file

# Adding grunt
npm install grunt --save-dev
npm install grunt-jslint --save-dev
npm install load-grunt-tasks --save-dev

# Initalizing Gruntfile
npm install grunt-init -g
grunt-init gruntfile
# grunt-init node
```

At the end of these steps, you have a basic `package.json` and `Gruntfile`.
For large scale project, you may want to further clean up your Gruntfile using `load-grunt-config` plugin.

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
