function disparo() {
    if (podeAtirar == true) {

        somDisparo.play();
        podeAtirar = false;

        topo = parseInt($("#jogador").css("top"))
        posicaoX = parseInt($("#jogador").css("left"))
        tiroX = posicaoX + 190;
        topoTiro = topo + 37;
        $("#fundoGame").append("<div id='disparo'></div");
        $("#disparo").css("top", topoTiro);
        $("#disparo").css("left", tiroX);

        var tempoDisparo = window.setInterval(executaDisparo, 10);

    }

    function executaDisparo() {

        posicaoX = parseInt($("#disparo").css("left"));
        $("#disparo").css("left", posicaoX + 18);

        if (posicaoX > 900) {

            window.clearInterval(tempoDisparo);
            tempoDisparo = null;
            $("#disparo").remove();
            podeAtirar = true;

        }
    }
}