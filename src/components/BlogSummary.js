import React from 'react';

import PropTypes from 'prop-types';
import {Card, CardActionArea, CardContent, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import moment from 'moment';
import TimerIcon from '@material-ui/icons/Timer';

const useStyles = makeStyles({
	root: {
		width: '20em',
	},
	content: {
		padding: '0.5em',
	},
	title: {
		borderBottom: '1px solid darkgrey',
	},
	when: {
		fontStyle: 'italic',
	},
});

export const BlogSummary = ({post}) => {
	const {
		link,
		module: {meta},
	} = post;

	const classes = useStyles();
	const moment1 = moment(meta.date);
	const when = moment(moment1).fromNow();
	return (
		<Card className={classes.root} variant="outlined">
			<CardActionArea>
				<CardContent className={classes.content}>
					<Typography className={classes.title} gutterBottom variant="h5" component="h2">
						{meta.title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{meta.description}
					</Typography>
					<Typography className={classes.when} variant="body2" color="textSecondary" component="p">
						{when}
					</Typography>
					<Typography className={classes.when} variant="body2" color="textSecondary" component="p">
						<TimerIcon/>&nbsp;{meta.readTime} minutes
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

BlogSummary.propTypes = {
	post: PropTypes.shape({
		link: PropTypes.string,
		module: PropTypes.object,
		readTime: PropTypes.number,
	}),
};

