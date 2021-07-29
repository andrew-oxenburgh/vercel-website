import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

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

export function CornerStamp() {
	// Const size = 5;
	const classes = useStyles();

	// eslint-disable-next-line no-undef
	const name = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';

	let stamp;

	if (name.indexOf('vercel') >= 0) {
		stamp = 'vercel';
	} else if (name.indexOf('github') >= 0) {
		stamp = 'github';
	} else if (name.indexOf('localhost') >= 0) {
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
