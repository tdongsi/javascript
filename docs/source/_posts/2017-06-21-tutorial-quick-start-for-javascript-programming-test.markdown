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

#### `load-grunt-tasks` vs `load-grunt-config`

``` javascript Basic Gruntfile
/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['lib/<%= pkg.name %>.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};
```

The original basic Gruntfile (after `grunt-init` step) manually load our Grunt plugins, as

``` javascript
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-imagemin');
```

If you now uninstall the plugin via `npm` and update your `package.json`, but forget to update your `Gruntfile`, your build will break.
With `load-grunt-tasks` plugin, you can collapse that down to the following one-liner:

``` javascript
require('load-grunt-tasks')(grunt);
```

After requiring the plugin, it will analyze your package.json file, determine which of the dependencies are Grunt plugins and load them all automatically.

`load-grunt-tasks` shrunk your Gruntfile in code and complexity a little, but task configurations still remain in the Gruntfile (defined in `grunt.initConfig`). 
As you configure a large application, it will still become a very large file.

#### References

* Safari: Introducing Grunt: the JavaScript task runner
* Common Grunt plugins:
    * [load-grunt-config](http://firstandthird.github.io/load-grunt-config/): key plugin to keep Gruntfile organized.
    * [concat](https://www.npmjs.com/package/grunt-contrib-concat)
    * Unit Testing: [qunit](https://www.npmjs.com/package/grunt-contrib-qunit)
    * Image optimization: imagemin
    * Deploying: deploy
    * Chaining: concurrent
* [Project scaffolding with `grunt-init`](https://gruntjs.com/project-scaffolding)
    * grunt-init-commonjs - Create a commonjs module, including Nodeunit unit tests.
    * grunt-init-gruntfile - Create a basic Gruntfile.
    * grunt-init-gruntplugin - Create a Grunt plugin, including Nodeunit unit tests.
    * grunt-init-jquery - Create a jQuery plugin, including QUnit unit tests.
    * [grunt-init-node](https://github.com/gruntjs/grunt-init-node) - Create a Node.js module, including Nodeunit unit tests.

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
