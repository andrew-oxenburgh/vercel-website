import {styled} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// @ts-ignore
import moment from 'moment';
import TimerIcon from '@material-ui/icons/Timer';

const PREFIX = 'BlogSummary';

const classes = {
	root: `${PREFIX}-root`,
	content: `${PREFIX}-content`,
	title: `${PREFIX}-title`,
	when: `${PREFIX}-when`,
};

const StyledCard = styled(Card)({
	[`&.${classes.root}`]: {
		minWidth: '20em',
		overflowWrap: 'break-word',
		overflow: 'clip',
	},
	[`& .${classes.content}`]: {
		padding: '0.5em',
	},
	[`& .${classes.title}`]: {
		borderBottom: '1px solid darkgrey',
	},
	[`& .${classes.when}`]: {
		fontStyle: 'italic',
	},
});

export const BlogSummary = ({post: {module: {meta}}}) => {
	const moment1 = moment(meta.date);
	const when = moment1.fromNow();
	return (
		<StyledCard className={classes.root} variant="outlined">
			<CardContent className={classes.content}>
				<Typography className={classes.title} gutterBottom variant="h5" component="h2">
					{meta.title}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{meta.description}
				</Typography>
				<Typography className={classes.when} variant="body2" color="textSecondary" component="span">
					{when}
				</Typography>
				<Typography className={classes.when} variant="body2" color="textSecondary" component="span">
					<TimerIcon/>&nbsp;{meta.readTime} minutes
				</Typography>
			</CardContent>
		</StyledCard>
	);
};
