/* eslint-disable no-undef */

import {postsFilteredByDraftSortedByDateDescending} from './orderPosts';

import * as R from 'ramda';

const POSTS = [
	{
		link: '/third',
		module: {
			meta: {
				title: 'third',
				date: 'July 4, 2021',
			},
		},
	},
	{
		link: '/first',
		module: {
			meta: {
				title: 'first',
				date: 'July 1, 2021',
			},
		},
	},
	{
		link: '/second',
		module: {
			meta: {
				title: 'second',
				date: 'July 2, 2021',
			},
		},
	},
];

const posts = () => R.clone(POSTS);

test('order posts by date', () => {
	const orderedPosts = postsFilteredByDraftSortedByDateDescending(posts());

	expect(orderedPosts.length).toEqual(3);
	expect(orderedPosts[0].link).toEqual('/third');
	expect(orderedPosts[1].link).toEqual('/second');
	expect(orderedPosts[2].link).toEqual('/first');
});

test('filter by draft', () => {
	const posts = R.clone(POSTS);
	posts[1].module.meta.draft = true;
	const orderedPosts = postsFilteredByDraftSortedByDateDescending(posts);

	expect(orderedPosts.length).toEqual(2);
	expect(orderedPosts[0].link).toEqual('/third');
	expect(orderedPosts[1].link).toEqual('/second');
});

test('order posts by date - empty dates go to end', () => {
	const posts = R.clone(POSTS);
	posts[2].module.meta.date = '';
	posts[2].link = '/empty-date';
	const orderedPosts = postsFilteredByDraftSortedByDateDescending(posts);

	expect(orderedPosts.length).toEqual(3);
	expect(orderedPosts[0].link).toEqual('/third');
	expect(orderedPosts[1].link).toEqual('/first');
	expect(orderedPosts[2].link).toEqual('/empty-date');
});

test('order posts by date - null dates go to end', () => {
	const posts = R.clone(POSTS);
	posts[2].module.meta.date = null;
	posts[2].link = '/empty-date';
	const orderedPosts = postsFilteredByDraftSortedByDateDescending(posts);

	expect(orderedPosts.length).toEqual(3);
	expect(orderedPosts[0].link).toEqual('/third');
	expect(orderedPosts[1].link).toEqual('/first');
	expect(orderedPosts[2].link).toEqual('/empty-date');
});

test('order posts by date - alpha dates go to end', () => {
	const posts = R.clone(POSTS);
	posts[2].module.meta.date = 'kjgkfjhdsjkfhkjhdfskjhkjdfhs';
	posts[2].link = '/empty-date';
	const orderedPosts = postsFilteredByDraftSortedByDateDescending(posts);

	expect(orderedPosts.length).toEqual(3);
	expect(orderedPosts[0].link).toEqual('/third');
	expect(orderedPosts[1].link).toEqual('/first');
	expect(orderedPosts[2].link).toEqual('/empty-date');
});
