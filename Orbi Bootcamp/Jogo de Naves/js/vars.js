var jogo = {};
var TECLA = {
W: 87,
S: 83,
D: 68
}
var velocidade=4;
var posicaoY = parseInt(Math.random() * 334);
var podeAtirar=true;
var fimdejogo=false;
var pontos=0;
var salvos=0;
var perdidos=0;
var energiaAtual=3;
var somDisparo=document.getElementById("somDisparo");
var somExplosao=document.getElementById("somExplosao");
var musica=document.getElementById("musica");
var somGameover=document.getElementById("somGameover");
var somPerdido=document.getElementById("somPerdido");
var somResgate=document.getElementById("somResgate");
jogo.pressionou = [];