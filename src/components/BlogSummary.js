import React from 'react';

import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import moment from 'moment';
import TimerIcon from '@material-ui/icons/Timer';

const useStyles = makeStyles({
	root: {
		minWidth: '20em',
		overflowWrap: 'break-word',
		overflow: 'clip',
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
		module: {meta},
	} = post;

	const classes = useStyles();
	const moment1 = moment(meta.date);
	const when = moment(moment1).fromNow();
	return (
		<Card className={classes.root} variant="outlined">
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

