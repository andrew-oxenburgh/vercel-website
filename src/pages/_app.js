import React from 'react';

import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import '../override.scss';

export default function App({Component, pageProps}) {
	return (
		<Layout pageTitle="Blog" description="My Personal Blog">
			<Component {...pageProps} />
		</Layout>
	);
}

App.propTypes = {
	Component: PropTypes.any,
	pageProps: PropTypes.any,
};

