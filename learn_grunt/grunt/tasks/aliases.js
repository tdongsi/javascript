module.exports = function(grunt, appOptions) {
    var build = [
        'mkdir:build',
        'compass',
        'copy',
        'compress'
    ];

    // This overrides the tasks in matrix-ui-common.
    //
    return {
        default: ['build'],
        build: build,
        test: ['jslint'], 
        jenkins: ['mkdir:jenkins', 'versionOutput']
    };
};