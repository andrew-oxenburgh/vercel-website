/* eslint-disable react/display-name */
import React, {useState} from 'react';

import NavBar from './NavBar';
import PropTypes from 'prop-types';
import {MDXProvider} from '@mdx-js/react';
import CodeBlock from './CodeBlock';
import {ThemeProvider, StyledEngineProvider, createTheme} from '@material-ui/core/styles';
import {CornerStamp} from './CornerStamp';

const components = {
	pre: props => <div {...props} />,
	code: CodeBlock,
};

const theme = createTheme();

export default function Layout({children}) {
	const [host, setHost] = useState('');

	// eslint-disable-next-line no-undef
	if (typeof window !== 'undefined' && host === '') {
		// eslint-disable-next-line no-undef
		setHost(typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '');
	}

	return <>
		<MDXProvider components={components}>
			<main>
				<CornerStamp host={host}/>
				<StyledEngineProvider injectFirst>
					<ThemeProvider theme={theme}>
						<NavBar/>
					</ThemeProvider>
				</StyledEngineProvider>
				<div className="content">{children}</div>
			</main>
		</MDXProvider>
	</>;
}

Layout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
	]),
	// PageTitle: PropTypes.string,
	// description: PropTypes.string,
};
