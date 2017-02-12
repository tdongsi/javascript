module.exports = {
    main: {
        files: [
            {
                expand: true,
                cwd: 'src/',
                src: ['**/*.js'],
                dest: 'dist/javascript',
                rename: function(dest, src) {
                    return dest + "/" + src.substring(0, src.indexOf('.')) + '.prod.js';
                },
                flatten: true
            }
        ]
    }
};