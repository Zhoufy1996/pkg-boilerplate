const eslintConfig = {
    parser: '@typescript-eslint/parser',
    plugins: ['typescript', '@typescript-eslint'],
    extends: [
        'airbnb',
        'plugin:prettier/recommended', // 支持perttier作为rules
        'plugin:import/typescript',
    ],
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    globals: {
        document: true,
        NodeJS: true,
    },
    // error warning off
    rules: {
        'no-console': 'off',
        'import/extensions': [
            'error',
            'always',
            {
                ts: 'never',
                tsx: 'never',
                js: 'never',
                jsx: 'never',
            },
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
            },
        ],
    },
};

module.exports = eslintConfig;
