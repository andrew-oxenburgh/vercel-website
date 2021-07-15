import React from 'react';

import Link from 'next/link';
import {HeadPost} from './HeadPost';
import {Button, Typography} from '@material-ui/core';
import PropTypes from 'prop-types';

export const Summary = ({post}) => {
	const {
		link,
		module: {meta},
	} = post;

	return (
		<article>
			<Typography>
				<HeadPost meta={meta}/>
				<Link href={'/blog' + link}>
					<Button color="inherit">Read more →</Button>
				</Link>
			</Typography>
		</article>
	);
};

Summary.propTypes = {
	post: PropTypes.shape({
		link: PropTypes.string,
		module: PropTypes.string,
		readTime: PropTypes.string,
	}),
};

