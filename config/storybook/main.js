const path = require('path')

module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-css-modules'
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5'
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
}
