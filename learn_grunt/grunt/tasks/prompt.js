module.exports = {
    github: {
        options: {
            questions: [
                {
                    config: 'exec.github.options.verbose',
                    type: 'confirm',
                    message: "Do you want all debug output?",
                    default: false
                }
            ]
        }
    }
}