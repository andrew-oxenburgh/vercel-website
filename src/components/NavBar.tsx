import {useState} from 'react';

import {styled} from '@material-ui/core/styles';

import {useRouter} from 'next/router';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import {Helmet} from 'react-helmet';
import {cordovaise} from '../utils/utils';

const PREFIX = 'NavBar';

const classes = {
	tab: `${PREFIX}-tab`,
	tablist: `${PREFIX}-tablist`,
	mobileClosed: `${PREFIX}-mobileClosed`,
	textAlign: 'center',
};

const StyledAppBar = styled(AppBar)({
	[`& .${classes.tab}`]: {
		width: '13em',
		maxWidth: '20em',
		opacity: 1.0,
		// color: 'white',
		// BackgroundColor: 'steelblue',
		borderBottom: '3px solid',
		borderBottomColor: 'lightblue',
		'&:hover': {
			fontWeight: 'bold',
			textDecoration: 'underline',
		},
		'&.Mui-selected': {
			borderBottomColor: 'darkblue',
			backgroundColor: 'lightsteelblue',
			fontWeight: 'bold',
			color: 'black',
		},
		'& .MuiTab-wrapper': {
			color: 'white',
		},
		'&.Mui-selected .MuiTab-wrapper': {
			color: 'black',
		},
	},
	[`& .${classes.tablist}`]: {
		'& .MuiTabs-indicator': {
			background: 'darkblue',
		},
	},
	[`& .${classes.mobileClosed}`]: {
		color: 'white',
		opacity: 1,
	},
});

export default function NavBar() {
	const router = useRouter();
	const isMobile = useMediaQuery((theme: { breakpoints }) => theme.breakpoints.down('xs'));
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
					<link rel="prefetch" href={props.href} as="script"/>
				</Helmet>
			</>
		);
	}

	function a11yProps(index,
	) {
		return {
			id: `nav-tab-${index}`,
			'aria-controls': `nav-tabpanel-${index}`,
		};
	}

	let value = router.pathname;

	if ([
		'/blog',
		'/blog/projects',
		'/blog/resume',
		'/blog/mine-sweeper',
		'/blog/components',
		'/blog/navigator',
		'/blog/deployment-checks',
		'/blog/to-do',
	].indexOf(value) < 0) {
		value = '/';
	}

	const tabs = (
		<Tabs
			className={classes.tablist}
			variant="scrollable"
			value={value}
			orientation={isMobile ? 'vertical' : 'horizontal'}
		>
			<LinkTab default href="/" style={{fontFamily: 'Besley, serif', fontSize: '120%', width: '8em'}} label="The Ox" router={router} value={'/'} {...a11yProps(0)}/>
			<LinkTab href={cordovaise('/blog')} label="Blog Postings" router={router} value={cordovaise('/blog')} {...a11yProps(1)} />
			<LinkTab href={cordovaise('/blog/mine-sweeper')} label="Mine Sweeper" router={router} value={cordovaise('/blog/mine-sweeper')} {...a11yProps(1)} />
		</Tabs>
	);

	const nameFromHref = href => {
		const defaults = {
			'/': 'The Ox',
			'/blog': 'Blog Posts',
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
					onClick={toggleMenu}>
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
		<StyledAppBar position="static">
			{body}
		</StyledAppBar>
	);
}
