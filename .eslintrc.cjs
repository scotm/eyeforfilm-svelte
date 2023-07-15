module.exports = {
	root: true,
	extends: ['eslint:recommended', 'prettier', 'plugin:svelte/recommended'],
	parser: '@typescript-eslint/parser',
	plugins: ['svelte'],
	parserOptions: {
		// ...
		project: './.svelte-kit/tsconfig.json',
		extraFileExtensions: ['.svelte'] // This is a required setting in `@typescript-eslint/parser` v4.24.0.
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			// Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
		// ...
	],
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
