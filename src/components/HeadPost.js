import React from 'react';

import PropTypes from 'prop-types';

export const HeadPost = ({meta}) => (
	<>
		<div className="great-title">{meta.title}</div>
		<div className="details">
			{/* { */}
			{/*	isBlogPost ? null : <p>{meta.description}</p> */}
			{/* } */}
			<span>{meta.date}</span>
			<span role="img" aria-label="one coffee">
        ☕ {meta.readTime + ' min read'}
			</span>
		</div>
	</>
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
