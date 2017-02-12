/*global module:false*/
module.exports = function(grunt) {
  
  var path = require('path');
  var _ = require('lodash-compat');
  
  const appOptions = {
      data: {},
      configPath: [
          path.join(process.cwd(), '/grunt/tasks')
      ],
      mergeFunction: function (config, overrideConfig) {
          var result = _.merge(config, overrideConfig,
              function (objValue, srcValue) {
                  if (_.isArray(objValue)) {
                      return srcValue;
                  }
          });

          return result;
      }
  };
  
  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt, appOptions);

};
