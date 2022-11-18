function movefundo() {

    esquerda = parseInt($("#fundoGame").css("background-position"));
    $("#fundoGame").css("background-position", esquerda - 2);

}

function movejogador() {

    if (jogo.pressionou[TECLA.W]) {
        var topo = parseInt($("#jogador").css("top"));
        $("#jogador").css("top", topo - 10);

        if (topo <= 0) {

            $("#jogador").css("top", topo + 10);
        }

    }

    if (jogo.pressionou[TECLA.S]) {

        var topo = parseInt($("#jogador").css("top"));
        $("#jogador").css("top", topo + 10);

        if (topo >= 434) {
            $("#jogador").css("top", topo - 10);
        }

    }

    if (jogo.pressionou[TECLA.D]) {
        disparo();
    }

}
function moveinimigo1() {

    posicaoX = parseInt($("#inimigo1").css("left"));
    $("#inimigo1").css("left", posicaoX - velocidade);
    $("#inimigo1").css("top", posicaoY);

    if (posicaoX <= 0) {
        posicaoY = parseInt(Math.random() * 334);
        $("#inimigo1").css("left", 694);
        $("#inimigo1").css("top", posicaoY);

    }
}

function moveinimigo2() {

    posicaoX = parseInt($("#inimigo2").css("left"));
    $("#inimigo2").css("left", posicaoX - 3);

    if (posicaoX <= 0) {

        $("#inimigo2").css("left", 775);

    }
} // Fim da função moveinimigo2()

function moveamigo() {
    posicaoX = parseInt($("#amigo").css("left"));
    $("#amigo").css("left", posicaoX + 1);

    if (posicaoX > 906) {

        $("#amigo").css("left", 0);

    }

}

