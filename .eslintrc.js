module.exports = {
    root: true,
    globals: {
        __DEV__: true,
        __ENV__: true,
        __SSR__: true,
    },
    env: {
        browser: true,
        es2022: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'standard',
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        babelOptions: {
            rootMode: 'upward',
        },
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        indent: ['error', 4, {
            ignoredNodes: ['TemplateLiteral'], // https://github.com/babel/babel-eslint/issues/530#issuecomment-563137317
            SwitchCase: 1,
        }],
        'max-len': ['error', {
            code: 120,
            ignoreComments: true,
            ignoreUrls: true,
        }],
        'no-multiple-empty-lines': ['error', {
            max: 2,
        }],
        'object-curly-spacing': ['error', 'never'],
        semi: ['error', 'always'],
        'space-before-function-paren': ['error', 'never'],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
