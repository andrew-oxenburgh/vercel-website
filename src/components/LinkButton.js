import Link from 'next/link';
import Button from '@material-ui/core/Button';
import React from 'react';
import * as PropTypes from 'prop-types';

function LinkButton({router, href, label}) {
	const calcColor = function (router, path) {
		return (router.pathname === path) ? 'secondary' : 'primary';
	};

	return (
		<Link passHref href={href}>
			<Button variant="contained" color={calcColor(router, href)}>{label}</Button>
		</Link>
	);
}

LinkButton.propTypes = {
	href: PropTypes.string,
	label: PropTypes.string,
	router: PropTypes.object,
};

export default LinkButton;
