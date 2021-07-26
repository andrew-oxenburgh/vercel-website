/* eslint-disable react/display-name */
import React from 'react';

import Head from 'next/head';
import Header from './Header';
import PropTypes from 'prop-types';
import {MDXProvider} from '@mdx-js/react';
import CodeBlock from './CodeBlock';

const components = {
	pre: props => <div {...props} />,
	code: CodeBlock,
};

export default function Layout({children, pageTitle, description}) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<meta charSet="utf-8"/>
				<meta name="description" content={description}/>
				<title>{pageTitle}</title>
			</Head>
			<MDXProvider components={components}>
				<main>
					<Header/>
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
