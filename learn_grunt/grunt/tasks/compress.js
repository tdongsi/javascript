module.exports = {
    main: {
        options: {
            archive: 'site.zip'
        },
        files: [
            {expand: true, src: ['dist/*'], dest: '/'}
        ]
    }
}