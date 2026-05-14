const perguntas = [
    {
        pergunta: "Brusque é uma… ?",

        opcoes: ["Cidade", "Animal", "Brinquedo"],

        correta: 0,

        imagens: [
            "assets/cidade-animada.jpg",
            "assets/animais-animados.jpg",
            "assets/brinquedos-animado.jpg"
        ]
    },

    {
        pergunta: "Brusque fica em qual país?",

        opcoes: ["", "", ""],

        correta: 0,

        imagens: [
            "assets/brasilPR.png",
            "assets/japaoPR.png",
            "assets/italiaPR.png"
        ]
    }
];

let perguntaAtual = 0;

function carregarPergunta(){

    document.getElementById("pergunta").innerText =
    perguntas[perguntaAtual].pergunta;

    const botoes = document.querySelectorAll("button");

    for(let i = 0; i < botoes.length; i++){

        botoes[i].innerText =
        perguntas[perguntaAtual].opcoes[i];

        botoes[i].style.backgroundImage =
        `url('${perguntas[perguntaAtual].imagens[i]}')`;
    }
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
carregarPergunta();