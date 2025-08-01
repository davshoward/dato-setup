const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */

const baseConfig = {
	eslint: {
		dirs: ['.'],
	},
	poweredByHeader: false,
	reactStrictMode: true,
	trailingSlash: false,
	turbopack: {
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.js',
			},
		},
	},
	webpack(config) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find(rule =>
			rule.test?.test?.('.svg')
		);

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: {
					not: [...fileLoaderRule.resourceQuery.not, /url/],
				}, // exclude if *.svg?url
				use: ['@svgr/webpack'],
			}
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
	experimental: {
		// how many times Next.js will retry failed page generation attempts
		// before failing the build
		staticGenerationRetryCount: 1,
		// how many pages will be processed per worker
		staticGenerationMaxConcurrency: 8,
		// the minimum number of pages before spinning up a new export worker
		staticGenerationMinPagesPerWorker: 25,
	},
};

module.exports = withBundleAnalyzer(baseConfig);
