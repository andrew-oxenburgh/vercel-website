import React from 'react';

import {Summary} from './Summary';
import {posts} from '../getAllPosts';

export default function Home() {
	return (
		<>
			<h2>Blog Posts. In alphabetical order</h2>
			{posts.map(post => (
				<Summary key={post.link} post={post}/>
			))}
		</>
	);
}
