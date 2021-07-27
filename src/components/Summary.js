import React from 'react';

import Link from 'next/link';
import {HeadPost} from './HeadPost';
import {Button} from '@material-ui/core';
import PropTypes from 'prop-types';

export const Summary = ({post}) => {
	const {
		link,
		module: {meta},
	} = post;

	return (
		<article>
			<HeadPost meta={meta}/>
			<Link href={'/blog' + link}>
				<Button color="inherit">Read more →</Button>
			</Link>
		</article>
	);
};

Summary.propTypes = {
	post: PropTypes.shape({
		link: PropTypes.string,
		module: PropTypes.object,
		readTime: PropTypes.number,
	}),
};

