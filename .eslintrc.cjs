module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
        'airbnb',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', '@typescript-eslint', 'react-hooks', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.ts', '.tsx'], ignoreFilesWithoutCode: true },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/prop-types': 'off',
        'import/prefer-default-export': 'off',
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': [
            1,
            {
                namedComponents: 'arrow-function',
            },
        ],
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            alias: {
                extensions: ['.ts', '.tsx'],
                map: [['@', './src']],
            },
        },
    },
};
