/* eslint-disable react/prop-types */
import React from 'react';

import Layout from '../components/Layout';

export default function App({Component, pageProps}) {
	return (
		<Layout pageTitle="Blog" description="My Personal Blog">
			<Component {...pageProps} />
		</Layout>
	);
}
