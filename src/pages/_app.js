import React from 'react';

import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import '../override.scss';

import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({});

export default function App({Component, pageProps}) {
	return (
		<StylesProvider generateClassName={generateClassName}>
			<Layout pageTitle="Blog" description="My Personal Blog">
				<Component {...pageProps} />
			</Layout>
		</StylesProvider>
	);
}

App.propTypes = {
	Component: PropTypes.any,
	pageProps: PropTypes.any,
};

