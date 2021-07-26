import React from 'react';

import {Typography} from '@material-ui/core';
import PropTypes from 'prop-types';

export const HeadPost = ({meta, isBlogPost}) => (
	<Typography>
		<h1 className={isBlogPost ? 'great-title' : null}>{meta.title}</h1>
		<div className="details">
			{
				isBlogPost ? null : <p>{meta.description}</p>
			}
			<span>{meta.date}</span>
			<span role="img" aria-label="one coffee">
        ☕ {meta.readTime + ' min read'}
			</span>
		</div>
	</Typography>
);

HeadPost.propTypes = {
	isBlogPost: PropTypes.bool,
	meta: PropTypes.shape({
		title: PropTypes.string,
		date: PropTypes.string,
		readTime: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
		]),
		description: PropTypes.string,
	}),
};
