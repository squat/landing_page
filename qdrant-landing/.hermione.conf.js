module.exports = {
    sets: {
        desktop: {
            files: 'tests/desktop'
        }
    },

    baseUrl: 'http://localhost:1313/',
    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'firefox' // this browser should be installed on your OS
            }
        }
    }
};
