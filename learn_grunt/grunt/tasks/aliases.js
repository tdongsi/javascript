module.exports = function(grunt, appOptions) {
    var build = [
        'mkdir:build'
    ];

    // This overrides the tasks in matrix-ui-common.
    //
    return {
        default: ['build'],
        build: build,
        jenkins: ['mkdir:jenkins', 'versionOutput']
    };
};