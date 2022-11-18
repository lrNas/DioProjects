function colisao() {
	var colisao1 = ($("#jogador").collision($("#inimigo1")));
	var colisao2 = ($("#jogador").collision($("#inimigo2")));
	var colisao3 = ($("#disparo").collision($("#inimigo1")));
	var colisao4 = ($("#disparo").collision($("#inimigo2")));
	var colisao5 = ($("#jogador").collision($("#amigo")));
	var colisao6 = ($("#inimigo2").collision($("#amigo")));
	
	if (colisao1.length > 0) {

		energiaAtual--;
		inimigo1X = parseInt($("#inimigo1").css("left"));
		inimigo1Y = parseInt($("#inimigo1").css("top"));
		explosao1(inimigo1X, inimigo1Y);

		posicaoY = parseInt(Math.random() * 334);
		$("#inimigo1").css("left", 694);
		$("#inimigo1").css("top", posicaoY);
	}

	if (colisao2.length > 0) {

		energiaAtual--;
		inimigo2X = parseInt($("#inimigo2").css("left"));
		inimigo2Y = parseInt($("#inimigo2").css("top"));
		explosao2(inimigo2X, inimigo2Y);

		$("#inimigo2").remove();

		reposicionaInimigo2();

	}

	if (colisao3.length > 0) {

		velocidade = velocidade + 0.3;
		pontos = pontos + 100;
		inimigo1X = parseInt($("#inimigo1").css("left"));
		inimigo1Y = parseInt($("#inimigo1").css("top"));

		explosao1(inimigo1X, inimigo1Y);
		$("#disparo").css("left", 950);

		posicaoY = parseInt(Math.random() * 334);
		$("#inimigo1").css("left", 694);
		$("#inimigo1").css("top", posicaoY);

	}

	if (colisao4.length > 0) {

		pontos = pontos + 50;
		inimigo2X = parseInt($("#inimigo2").css("left"));
		inimigo2Y = parseInt($("#inimigo2").css("top"));
		$("#inimigo2").remove();

		explosao2(inimigo2X, inimigo2Y);
		$("#disparo").css("left", 950);

		reposicionaInimigo2();

	}

	if (colisao5.length > 0) {

		salvos++;
		somResgate.play();
		reposicionaAmigo();
		$("#amigo").remove();
	}


	if (colisao6.length > 0) {

		perdidos++;
		amigoX = parseInt($("#amigo").css("left"));
		amigoY = parseInt($("#amigo").css("top"));
		explosao3(amigoX, amigoY);
		$("#amigo").remove();

		reposicionaAmigo();

	}

} 
