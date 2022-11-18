function gameOver() {
	fimdejogo = true;
	musica.pause();
	somGameover.play();
	window.clearInterval(jogo.timer);
	jogo.timer = null;
	$("#jogador").remove();
	$("#inimigo1").remove();
	$("#inimigo2").remove();
	$("#amigo").remove();
	$("#fundoGame").append("<div id='fim'></div>");
	$("#fim").html("<h1> Game Over </h1><p>Sua pontuação foi: " + pontos + "</p>" + "<div id='reinicia' onClick=reiniciaJogo()><h3>Jogar Novamente</h3></div>");
}