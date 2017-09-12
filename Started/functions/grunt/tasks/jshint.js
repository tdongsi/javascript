module.exports = {
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
    esversion: 6,
    globals: {}
  },
  gruntfile: {
    src: 'Gruntfile.js'
  },
  lib_test: {
    src: ['lib/**/*.js', 'test/**/*.js']
  }
};