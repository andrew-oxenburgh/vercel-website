import React from 'react';

import Link from 'next/link';
import {useRouter} from 'next/router';
import {AppBar, IconButton, Toolbar} from '@material-ui/core';
import LinkButton from './LinkButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {
	const router = useRouter();

	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton edge="start" color="inherit" aria-label="menu">
					<MenuIcon/>
				</IconButton>
				<Link href="/">
					<h3>𝕿𝖍𝖊 𝕺𝖝 &nbsp;</h3>
				</Link>

				<LinkButton href="/" label="Home" router={router}/>
				<LinkButton href="/projects" label="Projects" router={router}/>
				<LinkButton href="/about" label="About" router={router}/>
				<LinkButton href="/components" label="Components" router={router}/>
				<LinkButton href="/deployment-checks" label="Deployment" router={router}/>
				<LinkButton href="/to-do" label="To Do" router={router}/>
			</Toolbar>
		</AppBar>
	);
}
