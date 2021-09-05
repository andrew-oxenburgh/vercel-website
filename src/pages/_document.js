import Document, {Html, Head, Main, NextScript} from 'next/document';
import React from 'react';
import {ServerStyleSheets} from '@material-ui/styles';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}

	render() {
		return (
			<Html>
				<head>
					<html lang="en" />
					<title>Andrews Blog</title>
					<meta name="description" content="Basic example" />
					<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5.0, minimum-scale=1.0"/>
					<meta charSet="utf-8"/>
					<link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true"/>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
					<link href="https://fonts.googleapis.com/css2?family=Besley:ital,wght@0,400;0,500;0,900;1,400&display=swap" rel="stylesheet" crossOrigin="true"/>
					<link rel="manifest" href="/manifest.json"/>
					<meta property="og:title" content="Andrews Blog" />
					<meta property="og:type" content="article" />
					<meta property="og:image" content="/logo192.png/" />
				</head>
				<Head>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
MyDocument.getInitialProps = async ctx => {
	// Resolution order
	//
	// On the server:
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. document.getInitialProps
	// 4. app.render
	// 5. page.render
	// 6. document.render
	//
	// On the server with error:
	// 1. document.getInitialProps
	// 2. app.render
	// 3. page.render
	// 4. document.render
	//
	// On the client
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. app.render
	// 4. page.render

	// Render app and page and get the context of the page with collected side effects.
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			// eslint-disable-next-line react/display-name
			enhanceApp: App => props => sheets.collect(<App {...props} />),
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
	};
};

export default MyDocument;
