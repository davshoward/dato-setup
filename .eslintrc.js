module.exports = {
	root: true,
	extends: [
		'airbnb-base',
		'next/core-web-vitals',
		'plugin:prettier/recommended',
	],
	rules: {
		'prettier/prettier': 'error',
	},
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			parser: '@typescript-eslint/parser',
			plugins: [
				'@typescript-eslint',
				'unused-imports',
				'simple-import-sort',
				'tailwindcss',
				'jsx-a11y',
			],
			extends: [
				'airbnb-typescript',
				'next/core-web-vitals',
				'plugin:prettier/recommended',
				'plugin:tailwindcss/recommended',
				'plugin:jsx-a11y/recommended',
			],
			parserOptions: {
				project: './tsconfig.json',
			},
			rules: {
				// ✅ React and Next.js rules
				'react/destructuring-assignment': 'off',
				'react/require-default-props': 'off',
				'react/jsx-props-no-spreading': 'off',
				'react-hooks/exhaustive-deps': 'off',
				'jsx-a11y/anchor-is-valid': 'off',
				'@next/next/no-img-element': 'off',

				// ✅ TypeScript & Prettier compatibility
				'@typescript-eslint/comma-dangle': 'off',
				'@typescript-eslint/consistent-type-imports': 'error',
				'@typescript-eslint/no-unused-vars': 'off',

				// ✅ Naming, sorting, and imports
				'simple-import-sort/imports': 'error',
				'simple-import-sort/exports': 'error',
				'import/prefer-default-export': 'off',
				'unused-imports/no-unused-imports': 'error',
				'unused-imports/no-unused-vars': [
					'error',
					{ argsIgnorePattern: '^_' },
				],
				'no-underscore-dangle': ['error', { allow: ['_uid'] }],
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'variableLike',
						format: [
							'snake_case',
							'camelCase',
							'PascalCase',
							'UPPER_CASE',
						],
						leadingUnderscore: 'allow',
					},
				],
				'no-console':
					process.env.NODE_ENV === 'production' ? 'error' : 'off',
			},
			settings: {
				react: {
					version: 'detect',
				},
				tailwindcss: {
					callees: ['clsx', 'classnames', 'cva'],
					config: 'tailwind.config.js',
				},
			},
		},
	],
};
