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
		// Opacity: 0.5,
		zIndex: 100,
		border: 5 + 'em solid',
		pointerEvents: 'none',
	},
	github: {
		borderColor: 'rebeccapurple rebeccapurple transparent transparent',
	},
	vercel: {
		borderColor: 'silver, silver transparent transparent',
	},
	localhost: {
		borderColor: 'blue blue transparent transparent',
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
	let name = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';

	let modClass;

	if (name.indexOf('vercel') >= 0) {
		modClass = classes.vercel;
		name = 'vercel';
	} else if (name.indexOf('github') >= 0) {
		modClass = classes.github;
		name = 'github';
	} else {
		modClass = classes.localhost;
		name = 'localhost';
	}

	return (
		<>
			<div className={clsx(classes.triangle, modClass)}/>
			<div className={classes.text}>{name}</div>
		</>
	);
}
