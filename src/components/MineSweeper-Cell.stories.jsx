import React from 'react';

import {Cell, Line, TableWrapper} from './MineSweeper';
import {action} from '@storybook/addon-actions';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'Blog/MineSweeper/Cell',
	component: Cell,
	argTypes: {
		val: {
			options: ['X', '0', '1', '2', '3', '4', '5', '6', '7', '8'],
			description: 'value of the tile. X means bomb, number means number of surrounding bombs',
		},
		result: {options: ['unknown', 'won', 'lost', 'check']},
		initState: {options: ['dead', 'flagged', 'unknown', 'clear']},
	},
};

const Template = args => (
	<TableWrapper><Line>
		<Cell {...args} />
	</Line></TableWrapper>
);

export const BombWon = Template.bind({});
BombWon.args = {
	val: '3',
	resultEvent: action({action: 'error found'}),
	result: 'lost',
	initState: 'unknown',
};

export const BombCheck = Template.bind({});
BombCheck.args = {
	val: 'X',
	resultEvent: action({action: 'error found'}),
	result: 'check',
	initState: 'unknown',
};
