import React from 'react';

import Layout from '../components/Layout';
import PropTypes from 'prop-types';

import StylesProvider from '@material-ui/styles/StylesProvider';
import createGenerateClassName from '@material-ui/styles/createGenerateClassName';
import {Helmet} from 'react-helmet';

const generateClassName = createGenerateClassName({});

export default function App({Component, pageProps}) {
	return (
		<StylesProvider generateClassName={generateClassName}>
			<Helmet
				titleTemplate='Andrews Blog - %s'
			>
			</Helmet>
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

