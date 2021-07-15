import React from 'react';
import PropTypes from 'prop-types';

export default function Tutorial({children}) {
	return (
		<>
			<span style={{color: 'green', fontWeight: 400}}>{children}</span>
		</>
	);
}

Tutorial.propTypes = {
	children: PropTypes.element,
};

