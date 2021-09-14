import {BlogSummary} from './BlogSummary';
import {posts} from '../utils/getAllPosts';
import {postsFilteredByDraftSortedByDateDescending} from '../utils/orderPosts';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {Helmet} from 'react-helmet';
import {cordovaise} from '../utils/utils';

export default function BlogList() {
	let orderedPosts: [] = postsFilteredByDraftSortedByDateDescending(posts);
	// @ts-ignore
	orderedPosts = orderedPosts.filter((post: {module}) => !post.module.meta.draft);
	return (
		<>
			<Typography component="div"><h3>Blog Posts</h3></Typography>
			<Grid container spacing={3}>
				{orderedPosts.map((post: { link, title, module: {meta} }) => (
					<Grid item md key={post.link}>
						<Link href={cordovaise('/blog' + post.link)}>
							<Helmet>
								<link rel="preload" as="script" href={cordovaise('/blog' + post.link)}/>
							</Helmet>
							<BlogSummary key={post.link} post={post}/>
						</Link>
					</Grid>
				))}
			</Grid>
		</>
	);
}
