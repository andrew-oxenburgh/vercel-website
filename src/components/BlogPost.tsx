import Link from 'next/link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import {Helmet} from 'react-helmet';
import {cordovaise} from '../utils/utils';

export default function BlogPost({children, meta}) {
	return (
		<>
			<Breadcrumbs separator="›" aria-label="breadcrumb">
				<Link href={cordovaise('/')}>
                    Home
				</Link>
				<Link href="#">
					{meta.title}
				</Link>
			</Breadcrumbs>
			<Helmet>
				<meta name="description" content={meta.description}/>
				<title>{meta.title}</title>
				<meta property="og:description" content={meta.description}/>
			</Helmet>

			<article>
				<Card variant="outlined" style={{width: 900, maxWidth: '100%'}}>
					<CardHeader
						title={meta.title}
						subheader={meta.date + ' ☕ ' + meta.readTime + ' min read'}
					/>
					<CardContent>
						<Typography component={'span'}>{children}</Typography>
					</CardContent>
				</Card>
			</article>
		</>
	);
}
