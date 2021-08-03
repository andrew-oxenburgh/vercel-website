import React from 'react';

import Link from 'next/link';
import {Breadcrumbs, Card, CardContent, CardHeader, Typography} from '@material-ui/core';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

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
			<Helmet>
				<meta name="description" content={meta.description}/>
				<title>{meta.title}</title>
			</Helmet>

			<article>
				<Card variant="outlined" style={{width: 640}}>
					<CardHeader
						title={meta.title}
						subheader={meta.date + ' ☕ ' + meta.readTime + ' min read'}
					/>
					<CardContent>
						<Typography component={'span'}>{children}</Typography>
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
		description: PropTypes.string,
		readTime: PropTypes.string,
	}),
};
