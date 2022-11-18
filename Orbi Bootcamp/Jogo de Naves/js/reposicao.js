function reposicionaInimigo2() {

    var tempoColisao4 = window.setInterval(reposiciona4, 5000);

    function reposiciona4() {
        window.clearInterval(tempoColisao4);
        tempoColisao4 = null;

        if (fimdejogo == false) {

            $("#fundoGame").append("<div id=inimigo2></div");

        }

    }
}

function reposicionaAmigo() {
    var tempoAmigo = window.setInterval(reposiciona6, 6000);
    function reposiciona6() {
        window.clearInterval(tempoAmigo);
        tempoAmigo = null;
        if (fimdejogo == false) {
            $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
        }
    }
}