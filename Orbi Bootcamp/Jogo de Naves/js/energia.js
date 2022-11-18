function energia() {
    if (energiaAtual == 3) {
        $("#energia").css("background-image", "url(imgs/energia3.png)");
    }
    if (energiaAtual == 2) {
        $("#energia").css("background-image", "url(imgs/energia2.png)");
    }
    if (energiaAtual == 1) {
        $("#energia").css("background-image", "url(imgs/energia1.png)");
    }
    if (energiaAtual == 0) {
        $("#energia").css("background-image", "url(imgs/energia0.png)");
        gameOver();
    }
}