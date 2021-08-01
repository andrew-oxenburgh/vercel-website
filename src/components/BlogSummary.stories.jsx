import React from 'react';

import {BlogSummary} from './BlogSummary';

export default {
	title: 'Blog/BlogSummary',
	component: BlogSummary,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
};

const Template = args => <BlogSummary {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	post: {
		link: '/some-link',
		module: {
			meta: {
				date: '27th July, 2021',
				title: 'blog title goes here',
				description: 'here is a desc',
				readTime: '5',
			},
		},
	},
};
