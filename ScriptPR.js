const perguntas = [
    {
        pergunta: "Brusque é uma… ?",
        opcoes: ["Cidade", "Animal", "Brinquedo"],
        correta: 0
    },

    {
        pergunta: "Brusque fica em qual país?",
        opcoes: ["Brasil", "Japão", "Itália"],
        correta: 0
    },

    {
        pergunta: "Qual é o mascote de Brusque?",
        opcoes: ["Marreco", "Cobra", "Vaca"],
        correta: 0
    }
];

let perguntaAtual = 0;

function carregarPergunta(){

    document.getElementById("pergunta").innerText =
    perguntas[perguntaAtual].pergunta;

    const botoes = document.querySelectorAll("button");

    botoes[0].innerText = perguntas[perguntaAtual].opcoes[0];
    botoes[1].innerText = perguntas[perguntaAtual].opcoes[1];
    botoes[2].innerText = perguntas[perguntaAtual].opcoes[2];
}

function verificar(resposta){

    const resultado =
    document.getElementById("resultado");

    if(resposta == perguntas[perguntaAtual].correta){

        resultado.innerText = "Resposta correta!";

        perguntaAtual++;

        if(perguntaAtual < perguntas.length){

            setTimeout(() => {
                carregarPergunta();
                resultado.innerText = "";
            }, 1000);

        }else{
            resultado.innerText = "Você venceu o quiz!";
        }

    }else{
        resultado.innerText = "Resposta errada!";
    }
}