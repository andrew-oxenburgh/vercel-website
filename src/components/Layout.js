/* eslint-disable react/display-name */
import React, {useState} from 'react';

import Head from 'next/head';
import NavBar from './NavBar';
import PropTypes from 'prop-types';
import {MDXProvider} from '@mdx-js/react';
import CodeBlock from './CodeBlock';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import {CornerStamp} from './CornerStamp';

const components = {
	pre: props => <div {...props} />,
	code: CodeBlock,
};

const theme = createTheme();

export default function Layout({children, pageTitle, description}) {
	const [host, setHost] = useState('');

	// eslint-disable-next-line no-undef
	if (typeof window !== 'undefined' && host === '') {
		// eslint-disable-next-line no-undef
		setHost(typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '');
	}

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0"/>
				<meta charSet="utf-8"/>
				<meta name="description" content={description}/>
				<title>{pageTitle}</title>
			</Head>
			<MDXProvider components={components}>
				<main>
					<CornerStamp host={host}/>
					<ThemeProvider theme={theme}>
						<NavBar/>
					</ThemeProvider>
					<div className="content">{children}</div>
				</main>
			</MDXProvider>
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
	]),
	pageTitle: PropTypes.string,
	description: PropTypes.string,
};
