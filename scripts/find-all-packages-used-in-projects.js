let fs = require('fs');
let path = require('path');

let myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs[0]);

let dir = (myArgs.length === 0) ? '..' : myArgs[0];

let packageFile = path.join(dir, 'package.json');

let logDependencies = function () {
	let data = JSON.parse(fs.readFileSync(packageFile));
	data.dependencies && Object.keys(data.dependencies).forEach(key => {
		console.log(key);
	});
	data.devDependencies && Object.keys(data.devDependencies).forEach(key => {
		console.log(key);
	});
};

if (fs.existsSync(packageFile)) {
	logDependencies();
}
