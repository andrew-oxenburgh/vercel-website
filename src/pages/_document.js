import Document, {Html, Head, Main, NextScript} from 'next/document';
import React from 'react';

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

export default MyDocument;
