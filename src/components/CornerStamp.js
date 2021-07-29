import React from 'react';

export function CornerStamp() {
	const size = 5;

	// eslint-disable-next-line no-undef
	const name = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';

	let s = {
		name: 'localhost',
		color: 'pink pink transparent transparent',
	};

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
	// const stamp = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';
	// setName('vercel');

	if (name.indexOf('vercel') >= 0) {
		s = {name: 'vercel',
			color: 'red red transparent transparent',
		};
	} else if (name.indexOf('github') >= 0) {
		s = {name: 'github',
			color: 'green green transparent transparent',
		};
	} else {
		// SetColor('yellow yellow transparent transparent');
	}

	triangle.borderColor = s.color;

	// Console.log('triangle.borderColor = ' + triangle.borderColor);

	return (
		<>
			<div style={triangle}/>
			<div style={text}>{s.name}</div>
		</>
	);
}
