/*global module:false*/
module.exports = function(grunt) {

  var path = require('path');  
  const appOptions = {
      data: {},
      configPath: [
          path.join(process.cwd(), '/grunt/tasks')
      ]
  };
  
  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt, appOptions);

};
