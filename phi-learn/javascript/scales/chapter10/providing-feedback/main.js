var error = document.getElementById('error'),
	fail1 = document.getElementById('fail1'),
	fail2 = document.getElementById('fail2');

function onFail1(e) {
	e.target.disabled = true;
}

function onFail2(e) {
	e.target.disabled = true;
	error.style.display = 'block';
}

fail1.addEventListener('click', onFail1);
fail2.addEventListener('click', onFail2);
