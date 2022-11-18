function reiniciaJogo() {
	somGameover.pause();
	$("#fim").remove();
	var jogo = {};
	velocidade = 4;
	posicaoY = parseInt(Math.random() * 334);
	podeAtirar = true;
	fimdejogo = false;
	pontos = 0;
	salvos = 0;
	perdidos = 0;
	energiaAtual = 3;
	jogo.pressionou = [];
	start();
}