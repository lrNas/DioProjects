function start() {

	adicionaDivs();
	musica.addEventListener("ended", function () { musica.currentTime = 0; musica.play(); }, false);
	musica.play();

	$(document).keydown(function (e) {
		jogo.pressionou[e.which] = true;
	});

	$(document).keyup(function (e) {
		jogo.pressionou[e.which] = false;
	});

	jogo.timer = setInterval(loop, 30);
}	