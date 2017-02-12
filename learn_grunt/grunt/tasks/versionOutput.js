var fs = require('fs');

module.exports = function(grunt, opts) {
    grunt.registerTask('versionOutput', 'Output the package version in a properties file', function() {
        // BUILD_NUMBER is an environment variable set by Jenkins
        var buildProperties =
            'PACKAGE_VERSION=v' + opts.package.version + '\n' +
            'BUILD_NUMBER=' + process.env.BUILD_NUMBER + '\n' +
            'VERSION=' + opts.package.version;
        if (process.env.BUILD_NUMBER) {
            buildProperties += '.' + process.env.BUILD_NUMBER;
        }
        buildProperties += '\n';
        fs.writeFile('build/build.properties', buildProperties, this.async());
    });
};
