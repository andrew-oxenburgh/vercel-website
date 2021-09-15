import React from 'react';

import MineSweeper from './MineSweeper';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'Blog/MineSweeper',
	component: MineSweeper,
};

const Template = args => <MineSweeper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
