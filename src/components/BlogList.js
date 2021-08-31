import React from 'react';

import {BlogSummary} from './BlogSummary';
import {posts} from '../utils/getAllPosts';
import {postsFilteredByDraftSortedByDateDescending} from '../utils/orderPosts';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default function BlogList() {
	let orderedPosts = postsFilteredByDraftSortedByDateDescending(posts);
	orderedPosts = orderedPosts.filter(post => !post.module.meta.draft);
	return (
		<>
			<Typography component="div"><h3>Blog Posts</h3></Typography>
			<Grid container spacing={3}>
				{orderedPosts.map(post => (
					<Grid item md key={post.link}>
						<Link href={'/blog' + post.link}>
							<BlogSummary key={post.link} post={post}/>
						</Link>
					</Grid>
				))}
			</Grid>
			<Typography component="div">
				<p>
				Photo by <a href="https://unsplash.com/@elizabethlies?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">elizabeth lies</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
				</p>
			</Typography>
		</>
	);
}
