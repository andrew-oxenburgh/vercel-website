import React, {useState} from 'react';

import {useRouter} from 'next/router';
import {AppBar, IconButton, useMediaQuery, Tabs, Tab} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

export default function Header() {
	const router = useRouter();
	const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
	const [open, setOpen] = useState();

	function toggleMenu() {
		setOpen(!open);
	}

	function LinkTab(props) {
		return (
			<Tab
				component="a"
				value={props.href}
				{...props}
			/>
		);
	}

	LinkTab.propTypes = {
		href: PropTypes.string,
	};

	function a11yProps(index,
	) {
		return {
			id: `nav-tab-${index}`,
			'aria-controls': `nav-tabpanel-${index}`,
		};
	}

	const tabs = (
		<Tabs
			variant="fullWidth"
			value={router.pathname}
			orientation={isMobile ? 'vertical' : 'horizontal'}
		>
			<LinkTab href="/" label="𝕿𝖍𝖊 𝕺𝖝 &nbsp;" router={router} value={'/'} {...a11yProps(0)}/>
			<LinkTab href="/projects" label="Projects" router={router} value={'/projects'} {...a11yProps(1)}/>
			<LinkTab href="/about" label="About" router={router} value={'/about'} {...a11yProps(2)}/>
			<LinkTab href="/components" label="Components" router={router} value="/components"{...a11yProps(3)}/>
			<LinkTab href="/deployment-checks" label="Deployment" router={router} value={'/deployment-checks'} {...a11yProps(4)}/>
			<LinkTab href="/to-do" label="To Do" router={router} value="/to-do" {...a11yProps(5)}/>
		</Tabs>
	);

	const nameFromHref = {
		'/': 'Home',
		'/projects': 'Projects',
		'/about': 'About',
		'/components': 'Components',
		'/deployment-checks': 'Deployment',
		'/to-do': 'To do',
	};

	const mobile = open ? (
		<>{tabs}</>
	)
		: (
			<>
				<IconButton onClick={() => toggleMenu()}>
					<MenuIcon/>
					{nameFromHref[router.pathname] || 'unknown'}
				</IconButton>
			</>
		);

	const body = isMobile ? (
		<>{mobile}</>
	) : (
		<>{tabs}</>
	);

	return (
		<AppBar position="static">
			{body}
		</AppBar>
	);
}
