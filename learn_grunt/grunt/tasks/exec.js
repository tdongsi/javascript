module.exports = {
    github: {
        command: "ssh -T git@github.com",
        exitCode: 1,
        stdout: false,
        options: {
            verbose: false
        }
    }
}