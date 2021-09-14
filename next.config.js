/* eslint-disable object-shorthand */
const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
});

const exp = withMDX({
	pageExtensions: ['js', 'jsx', 'md', 'mdx'],
	// BasePath: '/blog-header',
	// trailingSlash: true,
	// exportPathMap: async function (
	// 	// defaultPathMap,
	// 	// {dev, dir, outDir, distDir, buildId},
	// ) {
	// 	return {
	// 		'/': {page: '/'},
	// 		'/blog/navigator/': {page: '/blog/navigator/index.html'},
	// 		'/blog': {page: '/blog/index.html'},
	// 		'/blog/to-do': {page: '/blog/to-do/index.html'},
	// 	};
	// },

});

exp.trailingSlash = true;

console.log('exp = ' + JSON.stringify(exp, null, 4));

module.exports = exp;
