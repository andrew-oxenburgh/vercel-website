import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import PropTypes from 'prop-types';

export const useStyles = makeStyles({
	resume: {
		textAlign: 'justify',
		backgroundImage: 'url(/elizabeth-lies-T9Gsevu_N8Y-unsplash.jpg)',
		backgroundColor: 'lightsteelblue',
		backgroundBlendMode: 'screen',
		color: '#333333',
		fontFamily: 'Besley, serif',
		borderRadius: '0.5em',
		border: '1px lightsteelblue solid',
		paddingLeft: '1em',
		paddingRight: '1em',
		'& p:first-line': {
			textIndent: '2em',
		},
		'& ol': {
			listStyle: 'lower-roman',
			marginBlockStart: '0.5em',
		},
		'& li': {
			paddingLeft: '0.5em',
		},
		'& p': {
			textIndent: '1em',
		},
		'& h4': {
			fontSize: '120%',
			fontStyle: 'italic',
			fontWeight: 'bold',
			marginBlockEnd: '0em',
			marginBlockStart: '0.5em',
			'@media (min-width: 600px)': {
				letterSpacing: '0.5em',
			},
			textAlign: 'center',
			backgroundColor: 'lightblue',
			borderRadius: '0.5em',
			border: '1px lightblue solid',
		},
		'& h1': {
			textAlign: 'center',
			'@media (min-width: 600px)': {
				letterSpacing: '0.7em',
			},
			backgroundColor: 'CornflowerBlue',
			fontSize: '1.5em',
			fontStyle: 'italic',
			fontWeight: 'bold',
			marginBlockEnd: '0em',
			marginBlockStart: '-0.5em',
			borderRadius: '0.5em',
		},
	},
});

export default function Resume({children}) {
	let classes = useStyles();
	return (
		<div className={classes.resume}>
			{children}
		</div>
	);
}

Resume.propTypes = {
	children: PropTypes.array,
};

