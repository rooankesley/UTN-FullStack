setInterval(function(){
	let img2 = document.querySelector('.img2');
	let img1 = document.querySelector('.img1');

	if (img1.style.opacity === '0') {
		img1.style.opacity = '1';
		img2.style.opacity = '0';
	} else {
		img1.style.opacity = '0';
		img2.style.opacity = '1';
	}
}, 2000);