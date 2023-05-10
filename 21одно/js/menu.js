


 function modal(id) {
	let modal = document.getElementById(id);
	let close = document.querySelectorAll('[data-close="true"]');
	modal.style.display = 'block';
	for (let i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			modal.style.display = 'none';
		}
	}
	window.onclick = function(e){
		if (e.target == modal) {
			modal.style.display = 'none';
		}
	};
	document.onkeydown = function(e) {
		if (e.keyCode == 27) {
			modal.style.display = 'none';
		}
	};
};
document.querySelector(".btn").addEventListener('click',blackjackHit)

