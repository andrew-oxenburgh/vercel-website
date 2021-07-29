import React, {useState} from 'react';
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
		borderColor: 'magenta orange transparent transparent',
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
	const [env, setEnv] = useState(null);

	// eslint-disable-next-line no-undef
	const name = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';
	let stamp;
	if (name.indexOf('vercel') >= 0) {
		// eslint-disable-next-line no-unused-expressions
		env || setEnv(classes.vercel);
		stamp = 'vercel';
	} else if (name.indexOf('github') >= 0) {
		// eslint-disable-next-line no-unused-expressions
		env || setEnv(classes.github);
		stamp = 'github';
	} else {
		// eslint-disable-next-line no-unused-expressions
		env || setEnv(classes.localhost);
		stamp = 'local';
	}

	return (
		<>
			<div className={clsx(classes.triangle, env)}/>
			<div className={classes.text}>{stamp}</div>
		</>
	);
}
