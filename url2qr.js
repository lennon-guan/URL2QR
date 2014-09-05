(function() {
	var href = window.location.href;
	var img = document.createElement('img');
	img.src = 'http://qr.liantu.com/api.php?text=' + encodeURIComponent(href);
	img.style.position	= 'fixed';
	img.style.left = '30px';
	img.style.top = '30px';
	img.style.opacity = 0.8;
	img.style.zIndex = 999999;
	img.width = 200;
	img.height = 200;
	img.onclick = function() {
		document.body.removeChild(img);
	}
	document.body.appendChild(img);
})();
