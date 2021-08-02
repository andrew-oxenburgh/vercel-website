import React from 'react';

import {BlogSummary} from './BlogSummary';
import {posts} from '../getAllPosts';
import {orderPostsByDateDesc} from '../utils/orderPosts';
import {Grid, Link} from '@material-ui/core';

export default function Home() {
	const orderedPosts = orderPostsByDateDesc(posts);
	return (
		<>
			<h2>Blog Posts</h2>
			<Grid container spacing={3}>
				{orderedPosts.map(post => (
					<Grid item xm key={post.link}>
						<Link href={'/blog' + post.link}>
							<BlogSummary key={post.link} post={post}/>
						</Link>
					</Grid>
				))}
			</Grid>
		</>
	);
}
