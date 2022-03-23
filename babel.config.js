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
                switch (sourcePath) {
                    case '@@system':
                        return resolveAlias('system', currentFile);
                    case '@@types':
                        return resolveAlias('types', currentFile);
                    case '@@utils':
                        return resolveAlias('utils', currentFile);
                }
            },
        }],
        ['babel-plugin-styled-components', {
            ssr: true,
            displayName: NODE_ENV !== 'production',
            fileName: false,
            pure: NODE_ENV === 'production',
            namespace: 'core-ui',
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

const resolveAlias = (sourcePath, currentFile) => {
    const rootPath = currentFile.substring(0, currentFile.indexOf('src') + 4); // 4 -> src/

    return '' + rootPath + sourcePath;
};
