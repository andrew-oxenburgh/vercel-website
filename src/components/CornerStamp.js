import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {BlogSummary} from './BlogSummary';

const useStyles = makeStyles({
	triangle: {
		position: 'absolute',
		top: 0,
		right: 0,
		fontSize: '0.5em',
		width: '0',
		height: '0',
		zIndex: 100,
		border: 5 + 'em solid',
		pointerEvents: 'none',
		borderColor: 'rebeccapurple rebeccapurple transparent transparent',
	},
	text: {
		color: 'white',
		position: 'absolute',
		top: 0,
		right: 0,
		background: 'transparent',
		fontSize: '0.5em',
		fontWeight: 'bold',
		width: 5 + 'rem',
		height: 5 + 'rem',
		textAlign: 'center',
		// Opacity: 0.5,
		zIndex: 100,
		transformOrigin: '0 0',
		transform: 'translateX(3.2em) rotate(45deg)',
		pointerEvents: 'none',
	},
});

export function CornerStamp({host}) {
	// Const size = 5;
	const classes = useStyles();

	let stamp;

	if (host.indexOf('vercel') >= 0) {
		stamp = 'vercel';
	} else if (host.indexOf('github') >= 0) {
		stamp = 'github';
	} else if (host.indexOf('localhost') >= 0) {
		stamp = 'localhost';
	} else {
		stamp = 'unknown';
	}

	return (
		<>
			<div className={classes.triangle}/>
			<div className={classes.text}>{stamp}</div>
		</>
	);
}

CornerStamp.propTypes = {
	host: PropTypes.string,
};
