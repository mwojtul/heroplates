document.addEventListener("DOMContentLoaded", function(event) { 
	var img =document.querySelectorAll('div.heroplates__img--bottom')[0];
	img.style.width = window.innerWidth + 'px';
	window.onresize = function(event) {
		img.style.width = window.innerWidth + 'px';
	};
});