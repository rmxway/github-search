module.exports = {
	root: true,
	env: {
		es6: true,
		browser: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
	],
	plugins: ['@typescript-eslint', 'simple-import-sort', 'react', 'import'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
	},
	rules: {
		'class-methods-use-this': 'off',
		'no-param-reassign': 'off',
		'no-shadow': 'off',
		'no-undef': 'off',
		'no-plusplus': 'off',
		'no-new': 'off',
		camelcase: 1,
		'no-console': 1,
		'react/react-in-jsx-scope': 'off',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'import/no-extraneous-dependencies': [
			'off',
			{
				devDependencies: true,
			},
		],
		'@typescript-eslint/no-shadow': 'error',
		// 'unused-imports/no-unused-imports': 'error',
		// 'unused-imports/no-unused-vars': [
		// 	'warn',
		// 	{
		// 		vars: 'all',
		// 		varsIgnorePattern: '^_',
		// 		args: 'after-used',
		// 		argsIgnorePattern: '^_',
		// 	},
		// ],
		'import/no-named-as-default': 'error',
		'import/no-unresolved': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
				js: 'never',
				jsx: 'never',
			},
		],
		'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
		'react/function-component-definition': [
			'off',
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
	},
	settings: {
		'import/resolver': {
			typescript: {},
			node: {
				extensions: ['.ts', '.tsx', '.js'],
			},
		},
	},
};
