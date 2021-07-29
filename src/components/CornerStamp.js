import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';

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
	},
	localhost: {
		borderColor: 'pink purple transparent transparent',
	},
	github: {
		borderColor: 'rebeccapurple rebeccapurple transparent transparent',
	},
	vercel: {
		borderColor: 'yellow yellow transparent transparent',
	},
	text: {
		color: 'white',
		position: 'absolute',
		top: 0,
		right: 0,
		background: 'transparent',
		fontSize: '0.5em',
		width: 5 + 'rem',
		height: 5 + 'rem',
		textAlign: 'center',
		// Opacity: 0.5,
		zIndex: 100,
		transformOrigin: '0 0',
		transform: 'translateX(3em) rotate(45deg)',
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
	} else {
		stamp = 'localhost';
	}

	const classList = clsx(classes.triangle,
		(stamp.indexOf('vercel') >= 0) && classes.vercel,
		(stamp.indexOf('github') >= 0) && classes.github,
		(stamp.indexOf('localhost') >= 0) && classes.localhost,
	);

	console.log('classes.vercel = ' + classes.vercel);
	console.log('classes.github = ' + classes.github);
	console.log('classes.localhost = ' + classes.localhost);

	console.log('classList = ' + classList);

	return (
		<>
			<div className={classList}/>
			<div className={classes.text}>{stamp}</div>
		</>
	);
}
