module.exports = function(grunt, appOptions) {
    var buildList = [
        'jshint',
        'qunit',
        'concat',
        'uglify'
    ];

    return {
        default: ['build'],
        build: buildList,
        test: ['jslint']
    };
};