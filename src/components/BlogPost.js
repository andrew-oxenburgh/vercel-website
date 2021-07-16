import React from 'react';

import Link from 'next/link';
import {Breadcrumbs, Card, CardContent, CardHeader, Typography} from '@material-ui/core';
import PropTypes from 'prop-types';

export default function BlogPost({children, meta}) {
	return (
		<>
			<Breadcrumbs aria-label="breadcrumb">
				<Link color="textPrimary" href="/">
                    Home
				</Link>
				<Link color="textPrimary" href="#">
					{meta.title}
				</Link>
			</Breadcrumbs>

			{/* <HeadPost meta={meta} isBlogPost/> */}
			<article>
				<Card variant="outlined" style={{width: 640}}>
					<CardHeader
						title={meta.title}
						subheader={meta.date + ' ☕ ' + meta.readTime + ' min read'}
					/>
					<CardContent>
						<Typography>
							{children}
						</Typography>
					</CardContent>
				</Card>
			</article>
		</>
	);
}

BlogPost.propTypes = {
	children: PropTypes.array,
	meta: PropTypes.shape({
		title: PropTypes.string,
		date: PropTypes.string,
		readTime: PropTypes.string,
	}),
};
