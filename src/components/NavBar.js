import React, {useState} from 'react';

import {useRouter} from 'next/router';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
	tab: {
		minWidth: '100px',
		opacity: 1.0,
		'&:hover': {
			fontWeight: 'bold',
			textDecoration: 'underline',
		},
	},
	mobileClosed: {
		color: 'white',
		opacity: 1,
	},
});

export default function NavBar() {
	const classes = useStyles();
	const router = useRouter();
	const isMobile = useMediaQuery(theme => theme.breakpoints.down('xs'));
	const [mobileMenuOpen, setMobileMenuOpen] = useState();

	function toggleMenu() {
		setMobileMenuOpen(!mobileMenuOpen);
	}

	function LinkTab(props) {
		return (
			<Tab className={classes.tab}
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

	let value = router.pathname;

	if ([
		'/blog/projects',
		'/blog/about',
		'/blog/components',
		'/blog/deployment-checks',
		'/blog/to-do',
	].indexOf(value) < 0) {
		value = '/';
	}

	// Value = value.replace(/(\/blog)\/.*/, '$1');
	// if (value === '/blog') {
	// 	value = '/';
	// }

	const tabs = (
		<Tabs
			variant="scrollable"
			value={value}
			orientation={isMobile ? 'vertical' : 'horizontal'}
		>
			<LinkTab default href="/" style={{fontFamily: 'Besley, serif', fontSize: '120%', width: '8em'}} label="The Ox" router={router} value={'/'} {...a11yProps(0)}/>
			<LinkTab href="/blog/projects" label="Projects" router={router} value={'/blog/projects'} {...a11yProps(1)}/>
			<LinkTab href="/blog/about" label="About" router={router} value={'/blog/about'} {...a11yProps(2)}/>
			<LinkTab href="/blog/components" label="Components" router={router} value="/blog/components"{...a11yProps(3)}/>
			<LinkTab href="/blog/deployment-checks" label="Deployment" router={router} value={'/blog/deployment-checks'} {...a11yProps(4)}/>
			<LinkTab href="/blog/to-do" label="To Do" router={router} value="/blog/to-do" {...a11yProps(5)}/>
		</Tabs>
	);

	const nameFromHref = href => {
		const defaults = {
			'/': 'Home',
			'/blog/about': 'About',
			'/blog/components': 'Components',
			'/blog/deployment-checks': 'Checks',
			'/blog/projects': 'Projects',
			'/blog/to-do': 'To do',
		};

		let ret = defaults[href];
		if (!ret) {
			ret = href.replace('/', '');
			ret = ret.replace('/', ' ');
			ret = ret.replace(/-/g, ' ');
		}

		return ret;
	};

	const mobile = mobileMenuOpen ? (
		<>{tabs}</>
	)
		: (
			<Box>
				<IconButton className={classes.mobileClosed} onClick={() => toggleMenu()}>
					<MenuIcon/>
					&nbsp; {nameFromHref(router.pathname) || 'unknown'}
				</IconButton>
			</Box>
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
