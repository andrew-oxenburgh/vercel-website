import React from 'react';

import {BlogSummary} from './BlogSummary';
import {posts} from '../getAllPosts';
import {orderPostsByDateDesc} from '../utils/orderPosts';

export default function Home() {
	const orderedPosts = orderPostsByDateDesc(posts);
	return (
		<>
			<h2>Blog Posts. In alphabetical order</h2>
			{orderedPosts.map(post => (
				<BlogSummary key={post.link} post={post}/>
			))}
		</>
	);
}
