co(function* () {
	var resp1 = yield fetch('test1.txt');
	if (resp1.status === 200) {
		document.body.innerHTML += (yield resp1.text()) + '<br>';
	}

	var resp2 = yield fetch('test2.txt');
	if (resp2.status === 200) {
		document.body.innerHTML += yield resp2.text();
	}
});