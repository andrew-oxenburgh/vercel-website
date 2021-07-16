import React from 'react';

import Head from 'next/head';
import Header from './Header';
import PropTypes from 'prop-types';

export default function Layout({children, pageTitle, description}) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<meta charSet="utf-8"/>
				<meta name="description" content={description}/>
				<title>{pageTitle}</title>
			</Head>
			<main>
				<Header/>
				<div className="content">{children}</div>
			</main>
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
