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
import makeStyles from '@material-ui/styles/makeStyles';
import {Helmet} from 'react-helmet';

const useStyles = makeStyles({
	tab: {
		minWidth: '100px',
		width: '10em',
		opacity: 1.0,
		color: 'black',
		borderBottom: '3px solid',
		borderBottomColor: 'lightblue',
		'&:hover': {
			fontWeight: 'bold',
			textDecoration: 'underline',
		},
		'&:visited': {
			color: 'black',
		},
		'&.Mui-selected': {
			borderBottomColor: 'darkblue',
			fontWeight: 'bold',
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
	const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
	const [mobileMenuOpen, setMobileMenuOpen] = useState();

	function toggleMenu() {
		setMobileMenuOpen(!mobileMenuOpen);
	}

	function LinkTab(props) {
		return (
			<>
				<Tab className={classes.tab}
					  component="a"
					  value={props.href}
					  {...props}
				>
				</Tab>
				<Helmet>
					<link rel="prefetch" href={props.href}/>
				</Helmet>
			</>
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
		'/blog/resume',
		'/blog/components',
		'/blog/deployment-checks',
		'/blog/to-do',
	].indexOf(value) < 0) {
		value = '/';
	}

	const tabs = (
		<Tabs
			variant="scrollable"
			value={value}
			orientation={isMobile ? 'vertical' : 'horizontal'}
		>
			<LinkTab default href="/" style={{fontFamily: 'Besley, serif', fontSize: '120%', width: '8em'}} label="The Ox" router={router} value={'/'} {...a11yProps(0)}/>
			<LinkTab href="/blog/projects" label="Projects" router={router} value={'/blog/projects'} {...a11yProps(1)} />
			<LinkTab href="/blog/resume" label="Resume" router={router} value={'/blog/resume'} {...a11yProps(2)}/>
			<LinkTab href="/blog/components" label="Components" router={router} value="/blog/components"{...a11yProps(3)}/>
			<LinkTab href="/blog/deployment-checks" label="Deployment" router={router} value={'/blog/deployment-checks'} {...a11yProps(4)}/>
			<LinkTab href="/blog/to-do" label="To Do" router={router} value="/blog/to-do" {...a11yProps(5)}/>
		</Tabs>
	);

	const nameFromHref = href => {
		const defaults = {
			'/': 'The Ox',
			'/blog/about': 'About',
			'/blog/components': 'Components',
			'/blog/deployment-checks': 'Deployment',
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
				<IconButton
					className={classes.mobileClosed}
					onClick={toggleMenu}
					size="large">
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
