import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import PropTypes from 'prop-types';

export const useStyles = makeStyles({
	resume: {
		textAlign: 'justify',
		backgroundImage: 'url(/elizabeth-lies-T9Gsevu_N8Y-unsplash.jpg)',
		backgroundColor: 'lightsteelblue',
		backgroundBlendMode: 'screen',
		color: '#2d2d2d',
		fontFamily: 'Besley, serif',
		'& p:first-line': {
			textIndent: '2em',
		},
		'& p': {
			textIndent: '1em',
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

