import React from 'react';

import Link from 'next/link';
import {useRouter} from 'next/router';
import {AppBar, Button, IconButton, Toolbar, Typography} from '@material-ui/core';
import * as PropTypes from 'prop-types';

function LinkButton({router, href, label}) {
	const calcColor = function (router, path) {
		return (router.pathname === path) ? 'secondary' : 'primary';
	};

	return (
		<Link href={href}>
			<Button variant="contained" color={calcColor(router, href)}>{label}</Button>
		</Link>

	);
}

LinkButton.propTypes = {
	href: PropTypes.string,
	label: PropTypes.string,
	router: PropTypes.object,
};
export default function Header() {
	const router = useRouter();

	console.log('router = ' + JSON.stringify(router, null, 4));

	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton edge="start" color="inherit" aria-label="menu">
					{/* <MenuIcon /> */}
				</IconButton>
				<Link href="/">
					<Typography variant="h6">
                        Andrew Oxenburgh&apos;s Blog
					</Typography>
				</Link>

				<LinkButton href="/" label="Home" router={router}/>
				<LinkButton href="/projects" label="Projects" router={router}/>
				<LinkButton href="/about" label="About" router={router}/>
				<LinkButton href="/components" label="Components" router={router}/>
				<LinkButton href="/deployment-checks" label="Deployment" router={router}/>
			</Toolbar>
		</AppBar>
	);
}
