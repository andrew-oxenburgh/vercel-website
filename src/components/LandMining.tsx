/* eslint-disable max-statements-per-line,camelcase */
import React, {useState} from 'react';
import {styled} from '@material-ui/core/styles';
import FlagIcon from '@material-ui/icons/Flag';
import DeadIcon from '@material-ui/icons/Clear';
import {Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const PREFIX = 'LandMining';

const classes = {
	cell: `${PREFIX}-cell`,
	bossed_tile: `${PREFIX}-bossed-tile`,
	clear_tile: `${PREFIX}-clear-tile`,
	dead_tile: `${PREFIX}-dead-tile`,
	dead_not_discovered_tile: `${PREFIX}-dead-not-discovered-tile`,
	line: `${PREFIX}-line`,
	table: `${PREFIX}-table`,
};

const TableWrapper = styled('table')({
	[`& .${classes.table}`]: {
		// borderCollapse: '1em',
	},
},
);

const bossedTile = {
	background: 'lightgrey',
	color: 'green',
	width: '2em',
	height: '2em',
	maxWidth: '100%',
	maxHeight: '100%',
	margin: '0',
	borderWidth: '5px',
	borderTopColor: 'Gainsboro',
	borderLeftColor: 'Gainsboro',
	borderBottomColor: 'darkgray',
	borderRightColor: 'darkgray',
	borderStyle: 'solid',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

const deadTile = {
	color: 'white',
	background: 'red',
	maxWidth: '100%',
	minWidth: '1.2em',
	height: '100%',
	minHeight: '100%',
	maxHeight: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

// @ts-ignore
const Line = styled('tr')({
	[`&.${classes.line}`]: {
		width: '2px',
	},
	[`& .${classes.cell}`]: {
		width: '2em',
		height: '2em',
		margin: '0',
		[`& .${classes.dead_tile}`]: {
			...deadTile,
		},
		[`& .${classes.dead_not_discovered_tile
		}`]: {
			...deadTile,
			borderRadius: '1em',
			borderColor: 'gainsboro',
		},
		[`& .${classes.bossed_tile}`]: {
			...bossedTile,
		},
		[`& .${classes.clear_tile}`]: {
			background: 'lightgrey',
			width: '100%',
			maxWidth: '100%',
			minWidth: '1.2em',
			height: '100%',
			minHeight: '100%',
			maxHeight: '100%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontWeight: 'bold',
			fontSize: '200%',
			overflowX: 'hidden',
		},
	},
},
);

const PROPERTY = {
	BOMB: 'X',
	NOT_BOMB: val => ('012345678'.indexOf(val) >= 0),
};

const PROP_COLOR = {
	0: 'transparent',
	1: 'blue',
	2: 'green',
	3: 'red',
	4: 'darkblue',
	5: 'purple',
	6: 'turquoise',
	7: 'black',
	8: 'grey',
};

const STATE = {
	DEAD: 'dead',
	FLAGGED: 'flagged',
	FLUX: 'unknown',
	CLEAR: 'clear',
};

const RESULT = {
	UNKNOWN: 0,
	WON: 1,
	LOST: 2,
	CHECK: 3,
};

function Cell({val, resultEvent, result, initState}) {
	let [state, setState] = useState(initState);

	if (result === RESULT.CHECK && state !== STATE.DEAD && val === PROPERTY.BOMB) {
		setState(STATE.DEAD);
		resultEvent(RESULT.LOST);
	}

	let toggleFlag = function () {
		setState(state === STATE.FLUX ? STATE.FLAGGED : state === STATE.FLUX);
	};

	let die = function () {
		setState(STATE.DEAD);
		resultEvent(RESULT.LOST);
	};

	function showSurrounding() {
		setState(STATE.CLEAR);
	}

	function onClick(event: { shiftKey: boolean }) {
		if (result) {
			return;
		}

		if (event.shiftKey) {
			toggleFlag();
		} else if (val === PROPERTY.BOMB) {
			die();
		} else {
			showSurrounding();
		}
	}

	const TILES = {
		FLAGGED: (
			<div className={classes.bossed_tile}>
				<FlagIcon/>
			</div>
		),
		DEAD: (
			<div className={classes.dead_tile}>
				<DeadIcon/>
			</div>
		),
		DEAD_NOT_DISCOVERED: (
			<div className={classes.dead_not_discovered_tile}>
				<DeadIcon/>
			</div>
		),
		FLUX: (
			<div className={classes.bossed_tile}>
			</div>
		),
		CLEAR: (
			<div className={classes.clear_tile} style={{color: PROP_COLOR[parseInt(val, 10)]}}>
				{val}
			</div>
		),
	};

	let tileComponent;

	switch (state) {
		case STATE.FLAGGED:
			tileComponent = TILES.FLAGGED;
			break;
		case STATE.DEAD:
			if (result === RESULT.UNKNOWN) {
				tileComponent = TILES.DEAD;
			} else {
				tileComponent = TILES.DEAD_NOT_DISCOVERED;
			}

			break;
		case STATE.FLUX:
			tileComponent = TILES.FLUX;
			break;
		case STATE.CLEAR:
			tileComponent = TILES.CLEAR;
			break;
		default:
			tileComponent = '';
			break;
	}

	return (
		<td className={classes.cell} onClick={event => onClick(event)}>
			{tileComponent}
		</td>
	);
}

let init = [
	[
		['X', '4', 'X', '2'],
		['X', '6', 'X', '3'],
		['X', '6', 'X', '3'],
		['X', '4', 'X', '2'],
	],
	[['0', '1', '2', '3', '4', '5', '6', '7', '8']],
];

function LandMining() {
	let [result, setResult] = useState(RESULT.UNKNOWN);
	let [count, setCount] = useState(0);
	let [board, setBoard] = useState(init[count]);

	function restart() {
		setResult(RESULT.UNKNOWN);
		setBoard(init[(count + 1) % 2]);
		setCount(count + 1);
	}

	function check() {
		setResult(RESULT.CHECK);
	}

	const rndr = (
		<TableWrapper cellSpacing="0" className={classes.table}>
			<tbody>
				{
					board.map((line, lIndex) => (<Line className={classes.line} key={`line-${lIndex}-${count}`}>{
						line.map((cell, cIndex) => <Cell key={'cell-' + lIndex + '-' + cIndex + '-' + count} val={cell} resultEvent={setResult} result={result} initState={STATE.FLUX}/>)
					}</Line>))
				}
			</tbody>
		</TableWrapper>
	);

	let resultBanner;

	switch (result) {
		case RESULT.WON:
			resultBanner = <h2>You won!!!!</h2>;
			break;
		case RESULT.LOST:
			resultBanner = <h2>You lost!!!!</h2>;
			break;
		case RESULT.UNKNOWN:
			resultBanner = <h2>good luck</h2>;
			break;
		default:
			break;
	}

	return (
		<>
			<h1>
				Land Mines - Work in Progress
			</h1>
			{resultBanner}
			<Typography>
				<Button color="primary" variant="contained" onClick={restart}>Restart!!</Button>
				<Button color="secondary" variant="contained" onClick={() => check()}>did i win</Button>
			</Typography>
			{rndr}
		</>
	);
}

export default LandMining;
