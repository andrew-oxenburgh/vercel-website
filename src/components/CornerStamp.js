import React from 'react';

export function CornerStamp() {
	const size = 5;

	const triangle = {
		position: 'absolute',
		top: 0,
		right: 0,
		fontSize: '0.5em',
		width: '0',
		height: '0',
		// Opacity: 0.5,
		zIndex: 100,
		borderTop: size + 'em solid',
		borderBottom: size + 'em solid',
		borderLeft: size + 'em solid',
		borderRight: size + 'em solid',
		pointerEvents: 'none',
	};

	const text = {
		color: 'white',
		position: 'absolute',
		top: 0,
		right: 0,
		background: 'transparent',
		fontSize: '0.5em',
		width: size + 'rem',
		height: 5 + 'rem',
		textAlign: 'center',
		// Opacity: 0.5,
		zIndex: 100,
		transformOrigin: '0 0',
		transform: 'translateX(3em) rotate(45deg)',
		pointerEvents: 'none',
	};

	// eslint-disable-next-line no-undef
	let stamp = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';

	if (stamp.indexOf('vercel') > 0) {
		stamp = 'vercel';
		triangle.borderColor = 'orange orange transparent transparent';
	} else if (stamp.indexOf('github') > 0) {
		stamp = 'github';
		triangle.borderColor = 'red red transparent transparent';
	} else {
		triangle.borderColor = 'pink pink transparent transparent';
	}

	console.log('stamp = ' + stamp);

	return (
		<>
			<div style={triangle}/>
			<div style={text}>{stamp}</div>
		</>
	);
}
