import React from 'react';

import {Typography} from '@material-ui/core';
import PropTypes from 'prop-types';

export default function BlogTitle({children}) {
	return (
		<>
			<Typography>
				<h1 style={{fontWeight: 700}}>{children}</h1>
			</Typography>
		</>
	);
}

BlogTitle.propTypes = {
	children: PropTypes.element,
};
