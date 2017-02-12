module.exports = {
    github: {
        command: function() {
            var command = "ssh -T";
            // TODO: how to refer to github.options.verbose?
            if (grunt.config.exec.github.options.verbose) {
                command += " -v";
            }
            command += " git@github.com";
            return command;
        },
        exitCode: 1,
        stdout: false,
        options: {
            verbose: false
        }
    }
}