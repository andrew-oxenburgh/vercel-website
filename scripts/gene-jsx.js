const fs = require('fs');
const mdx = require('@mdx-js/mdx');

const mdxText = fs.readFileSync('../src/pages/blog/resume/index.mdx', 'utf8');

const jsx = mdx.sync(mdxText);

console.log(jsx);

