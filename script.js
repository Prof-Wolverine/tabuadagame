let pontuacao = 0;
let numero1, numero2, operacao;

function gerarPergunta() {
    numero1 = Math.floor(Math.random() * 10) + 1;
    numero2 = Math.floor(Math.random() * 10) + 1;
    operacao = Math.floor(Math.random() * 4); // 0: soma, 1: subtração, 2: multiplicação, 3: divisão

    let pergunta = "";
    switch (operacao) {
        case 0:
            pergunta = `Qual é ${numero1} + ${numero2}?`;
            break;
        case 1:
            pergunta = `Qual é ${numero1} - ${numero2}?`;
            break;
        case 2:
            pergunta = `Qual é ${numero1} × ${numero2}?`;
            break;
        case 3:
            pergunta = `Qual é ${numero1} ÷ ${numero2}?`;
            break;
    }

    document.getElementById("pergunta").innerText = pergunta;
}

function verificar() {
    let resposta = document.getElementById("resposta").value;
    let resultado = "";

    switch (operacao) {
        case 0:
            if (parseInt(resposta) === numero1 + numero2) {
                resultado = "Correto!";
                pontuacao++;
            } else {
                resultado = `Errado! A resposta certa é ${numero1 + numero2}.`;
            }
            break;
        case 1:
            if (parseInt(resposta) === numero1 - numero2) {
                resultado = "Correto!";
                pontuacao++;
            } else {
                resultado = `Errado! A resposta certa é ${numero1 - numero2}.`;
            }
            break;
        case 2:
            if (parseInt(resposta) === numero1 * numero2) {
                resultado = "Correto!";
                pontuacao++;
            } else {
                resultado = `Errado! A resposta certa é ${numero1 * numero2}.`;
            }
            break;
        case 3:
            if (parseFloat(resposta) === numero1 / numero2) {
                resultado = "Correto!";
                pontuacao++;
            } else {
                resultado = `Errado! A resposta certa é ${numero1 / numero2}.`;