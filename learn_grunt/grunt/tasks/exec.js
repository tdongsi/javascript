module.exports = {
    github: {
        command: function() {
            var command = "ssh -T";
            // Use github for now
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