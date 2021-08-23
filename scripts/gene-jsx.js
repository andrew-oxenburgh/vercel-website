const fs = require('fs');
const mdx = require('@mdx-js/mdx');

const mdxText = fs.readFileSync('../src/pages/blog/about/index.mdx', 'utf8');

const jsx = mdx.sync(mdxText);

console.log(jsx);

