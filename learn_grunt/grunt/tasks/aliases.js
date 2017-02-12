module.exports = function(grunt, appOptions) {
    var buildList = [
        'mkdir:build',
        'compass',
        'copy',
        'compress'
    ];

    // This overrides the tasks in matrix-ui-common.
    //
    return {
        default: ['build'],
        build: buildList,
        test: ['jslint'], 
        jenkins: ['mkdir:jenkins', 'versionOutput'],
        checkGithub: ['prompt:github', 'exec:github']
    };
};