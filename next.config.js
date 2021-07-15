const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
});

module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'md', 'mdx'],
	// BasePath: '/blog-header',
});
