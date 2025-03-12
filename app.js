alert("boas vindas ao jogo do numero secreto");
let numerosecreto = 5;
console.log(numerosecreto);
let chute;
let tentativas =1;

//enquanto o chute for diferente do numero secreto
while (chute != numerosecreto) {
    chute = prompt("escola um numero entre 1 e 10");
    //se o chute for igual ao n.s
    if (chute == numerosecreto) {
        alert(`parabens voce acertou ${numerosecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numerosecreto) {
            alert(`o numero secreto é menor ${chute}`);
        } else {
            alert(`o numero secreto é maior ${chute}`);
        }
        tentativas++;
    }
}


//se o numero for igual ao numero secreto
