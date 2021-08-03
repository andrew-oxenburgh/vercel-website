import React from 'react';

import {BlogSummary} from './BlogSummary';
import {posts} from '../utils/getAllPosts';
import {orderPostsByDateDesc} from '../utils/orderPosts';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

export default function Home() {
	const orderedPosts = orderPostsByDateDesc(posts);
	return (
		<>
			<h2>Blog Posts</h2>
			<Grid container spacing={3}>
				{orderedPosts.map(post => (
					<Grid item md key={post.link}>
						<Link href={'/blog' + post.link}>
							<BlogSummary key={post.link} post={post}/>
						</Link>
					</Grid>
				))}
			</Grid>
		</>
	);
}
