const path = require('path');

const BABEL_ENV = process.env.BABEL_ENV;
const NODE_ENV = process.env.NODE_ENV;


module.exports = function(api) {
    api && api.cache(true);

    const presets = [
        [
            '@babel/preset-env',
            {
                corejs: '3.21',
                shippedProposals: true,
                useBuiltIns: 'usage',

                modules: BABEL_ENV === 'cjs' ? 'commonjs' : false,
            },
        ],
        [
            '@babel/preset-react', {
                runtime: 'automatic',
            },
        ],
    ];

    const plugins = [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-runtime',
        ['module-resolver', {
            resolvePath: (sourcePath, currentFile) => {
                if (NODE_ENV === 'development' && /^@burrito-ui/.test(sourcePath)) {
                    return path.resolve(
                        'packages',
                        sourcePath.replace(/@burrito-ui[/|\\]/, ''),
                        'src',
                        'index.js',
                    );
                };

                return sourcePath;
            },
        }],
        ['styled-components', {
            displayName: NODE_ENV !== 'production',
            fileName: false,
            pure: NODE_ENV === 'production',
            ssr: true,
        }],
    ];

    return {
        babelrcRoots: [
            '.',
            './packages/*',
        ],
        exclude: [
            'node_modules',
        ],
        presets,
        plugins,
    };
};
