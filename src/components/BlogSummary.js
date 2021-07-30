import React from 'react';

// Import '../override.scss';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
	article: {
		paddingTop: '1em',
	},
	articleDetails: {
		cursor: 'pointer',
		'&:hover': {
			opacity: 0.5,
		},
	},
	articleTitle: {
		textDecoration: 'underline',
		fontWeight: 'bold',
		fontSize: '150%',
	},
});

export const BlogSummary = ({post}) => {
	const classes = useStyles();

	const {
		link,
		module: {meta},
	} = post;

	return (
		<article className={classes.article}>
			<Link href={'/blog' + link} className={classes.link}>
				<span className={classes.articleDetails}>
					<span className={classes.articleTitle}>{meta.title}</span>
					<span>&nbsp;{meta.date}</span>
					<span role="img" aria-label="coffee">
        ☕ {meta.readTime + ' min read'}
					</span>
					<span >Read more →</span>
				</span>
			</Link>
		</article>
	);
};

BlogSummary.propTypes = {
	post: PropTypes.shape({
		link: PropTypes.string,
		module: PropTypes.object,
		readTime: PropTypes.number,
	}),
};

