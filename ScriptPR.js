const perguntas = [
    {
        pergunta: "1- Brusque é uma… ?",

        opcoes: ["Cidade", "Animal", "Brinquedo"],

        correta: 0,

        imagens: [
            "assets/cidade-animada.jpg",
            "assets/animais-animados.jpg",
            "assets/brinquedos-animado.jpg"
        ]
    },

    {
        pergunta: "2- Brusque fica em qual país?",

        opcoes: ["", "", ""],

        correta: 0,

        imagens: [
            "assets/brasilPR.png",
            "assets/japaoPR.png",
            "assets/italiaPR.png"
        ]
    },

     {
        pergunta: "3- Qual é o mascote de Brusque?",

        opcoes: ["Marreco", "Cobra", "Vaca"],

        correta: 0,

        imagens: [
            "assets/marrecoPR.png",
            "assets/cobraPR.png",
            "assets/vacaPR.png",
        ]
    },

        {
            pergunta: "4- Qual é o lugar em Brusque onde podemos ver muitos animais e árvores bonitas?",

            opcoes: ["Posto de Gasolina", "Supermercado", "Parque Zoobotânico"],

            correta: 2,

            imagens: [
                "assets/posto de gasolina.png",
                "assets/mercado.png",
                "assets/zoologico.png",
            ],

        },

        {
            pergunta: "5- O que as pessoas usam quando faz frio em Brusque?",

            opcoes: ["Roupa de Mergulho", "Casaco", "Fantasia de peixe"],

            correta: 1,

            imagens: [
                "assets/roupa_de_mergulho_1.png",
                "assets/casaco.png",
                "assets/roupa_de_peixe.jpg",
            ],

        },

        {
            pergunta: "6- O que muita gente gosta de comprar em Brusque?",

            opcoes: ["Roupas", "Foguete", "Dinossauro"],

            correta: 0,

            imagens: [
                "assets/Roupas.jpg",
                "assets/foguete.png",
                "assets/dinossauro.png",
            ],

        },

        {
            pergunta: "7- Em Brusque tem escolas para?",

            opcoes: ["Aprender", "Dormir", "comer pipoca"],

            correta: 0,

            imagens: [
                "assets/estudar.png",
                "assets/dormir.png",
                "assets/comer pipoca.png",
            ],

        },

        {
            pergunta: "8- Em Brusque Qual lugar tem muitos carros passando?",

            opcoes: ["Rios", "rua", "ceu"],

            correta: 1,

            imagens: [
                "assets/rios.jpg",
                "assets/ruas.jpg",
                "assets/ceu.jpg",
            ],

        },

        {
            pergunta: "9- Em Brusque quando estamos com sede bebemos?",

            opcoes: ["suco estragado", "lava", "agua"],

            correta: 2,

            imagens: [
                "assets/suco_estragado.png",
                "assets/lava.jpg",
                "assets/agua.png",
            ],

        },

        {
            pergunta: "10- Qual e a camisa de futebol do time de Brusque?",

            opcoes: ["Brusque", "Real Madrid", "Barcelona"],

            correta: 0,

            imagens: [
                "assets/camisa brusque.png",
                "assets/real madrid.png",
                "assets/barcelona2.png",
            ],

        },
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
        resultado.classList = "resultado"  
        resultado.innerText = "Resposta correta!";

        perguntaAtual++;

        if(perguntaAtual < perguntas.length){

            setTimeout(() => {
                carregarPergunta();
                resultado.innerText = "";
            }, 1000);

        }else{
            resultado.innerText = "Você venceu o quiz!";
            setTimeout(()=> {
                window.location.href="resultado.html";
            }, 1000)
        }

    }else{
        resultado.classList = "errado"  
        resultado.innerText = "Resposta errada!";
    }
}
carregarPergunta();