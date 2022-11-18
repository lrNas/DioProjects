function explosao1(inimigo1X, inimigo1Y) {

	somExplosao.play();
	$("#fundoGame").append("<div id='explosao1'></div");
	$("#explosao1").css("background-image", "url(imgs/explosao.png)");
	var div = $("#explosao1");
	div.css("top", inimigo1Y);
	div.css("left", inimigo1X);
	div.animate({ width: 200, opacity: 0 }, "slow");

	var tempoExplosao = window.setInterval(removeExplosao, 1000);

	function removeExplosao() {

		div.remove();
		window.clearInterval(tempoExplosao);
		tempoExplosao = null;

	}

}


function explosao2(inimigo2X, inimigo2Y) {

	somExplosao.play();
	$("#fundoGame").append("<div id='explosao2'></div");
	$("#explosao2").css("background-image", "url(imgs/explosao.png)");
	var div2 = $("#explosao2");
	div2.css("top", inimigo2Y);
	div2.css("left", inimigo2X);
	div2.animate({ width: 200, opacity: 0 }, "slow");
	var tempoExplosao2 = window.setInterval(removeExplosao2, 1000);
	function removeExplosao2() {
		div2.remove();
		window.clearInterval(tempoExplosao2);
		tempoExplosao2 = null;
	}
}

function explosao3(amigoX, amigoY) {
	somExplosao.play();
	$("#fundoGame").append("<div id='explosao3' class='anima4'></div");
	$("#explosao3").css("top", amigoY);
	$("#explosao3").css("left", amigoX);
	var tempoExplosao3 = window.setInterval(resetaExplosao3, 1000);
	function resetaExplosao3() {
		$("#explosao3").remove();
		window.clearInterval(tempoExplosao3);
		tempoExplosao3 = null;
	}
}