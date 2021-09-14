import React from 'react';

import {CornerStamp} from './CornerStamp';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'Blog/CornerStamp',
	component: CornerStamp,
};

const Template = args => <CornerStamp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	host: 'vercel',
};
