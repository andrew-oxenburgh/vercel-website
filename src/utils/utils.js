
let cordovaise = function (href) {
	let ret = href;
	if (process.env.APP_TYPE === 'cordova') {
		// eslint-disable-next-line block-scoped-var
		if (ret === '/') {
			ret = '/assets/www/index.html';
		} else {
			ret = '/assets/www' + ret + '/index.html';
		}

		// remove leading slash
		// ret = ret.indexOf('/') === 0 ? ret.replace('/', '') : ret;
	}

	return ret;
};

export {
	cordovaise,
};
