const spinner2 = function () {
	let delay = 0;
	let newArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
	for (const string of newArr) {
		setTimeout(() => {
			process.stdout.write(string);
		}, delay + 200);
		delay = delay + 200;
	}
};
// 	setTimeout(() => {
// 		process.stdout.write('\r|   ');
// 		process.stdout.write('\r/   ');
// 		process.stdout.write('\r-   ');
// 		process.stdout.write('\r\\   ');
// 	}, delay + 500);
// };

spinner2();
