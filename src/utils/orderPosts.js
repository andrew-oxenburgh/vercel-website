import * as R from 'ramda';

const orderPostsByDateDesc = function (posts) {
	const diff = (first, second) => {
		const firstTime = first.module.meta.date ? new Date(first.module.meta.date).getTime() : -1;
		const secondTime = second.module.meta.date ? new Date(second.module.meta.date).getTime() : -1;

		return secondTime - firstTime;
	};

	return R.sort(diff, posts);
};

export {
	orderPostsByDateDesc,
};
