const withImages = require('next-images')
module.exports = withImages()


// next.config.js
module.exports = {
    webpack: config => {
        config.resolve.mainFields = ["main", "browser", "module"];
        return config;
    },
}