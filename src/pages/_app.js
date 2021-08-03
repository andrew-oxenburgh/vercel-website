import React from 'react';

import Layout from '../components/Layout';
import PropTypes from 'prop-types';

import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import {Helmet} from 'react-helmet';

const generateClassName = createGenerateClassName({});

export default function App({Component, pageProps}) {
	return (
		<StylesProvider generateClassName={generateClassName}>
			<Helmet>
				<html lang="en" />
				<title>Andrews Blog</title>
				<meta name="description" content="Basic example" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5.0, minimum-scale=1.0"/>
				<meta charSet="utf-8"/>
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

