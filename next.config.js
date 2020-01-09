const withImages = require('next-images')
module.exports = withImages()

module.exports = {
    webpack: config => {
        config.resolve.mainFields = ["main", "browser", "module"]
        return config
    },
}