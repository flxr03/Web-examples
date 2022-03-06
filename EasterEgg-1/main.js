let pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let nowKey = 0;
let is_done = false;

function eKeyHandler(event) {
	if(is_done) {
		return;
	}

	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[nowKey]) {
		nowKey = 0;
		$('#secret').empty();
		is_done = false;
		return;
	}

	nowKey++;
	$('#secret').append(pattern[nowKey-1]+' ');
	if (pattern.length === nowKey) {
		nowKey = 0;
		setTimeout(() => {
			$('#secret').empty();
			$('#secret').append('Good job!');
		}, 1000);
		is_done = true;
	}
};

document.addEventListener('keydown', eKeyHandler, false);