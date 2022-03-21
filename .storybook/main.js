const path = require('path');
const webpack = require('webpack');

const babelConfig = require('../babel.config.js');


const {
    NODE_ENV = 'development',
    IS_SSR = false,
} = process.env;

module.exports = {
    stories: ['../packages/one.ui/src/**/stories/*.stories.jsx'],
    staticDirs: ['../static'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-actions',
        '@storybook/addon-controls',
    ],
    babel: async () => {
        return babelConfig();
    },
    features: {
        babelModeV7: true,
        postcss: false,
    },
    framework: '@storybook/react',
    webpackFinal: async (config) => {
        config.plugins.push(
            new webpack.DefinePlugin({
                __DEV__: NODE_ENV === 'development',
                __ENV__: JSON.stringify(NODE_ENV),
                __SSR__: IS_SSR,
            })
        );

        // Заменяем на свой шаблон!!!
        const HtmlWebpackPlugin = config.plugins.find((plugin) => (
            plugin.constructor.name === 'HtmlWebpackPlugin'
        ));
        HtmlWebpackPlugin && (
            HtmlWebpackPlugin.options.template = path.resolve('./.storybook/preview-template.ejs')
        );

        return config;
    },
};
