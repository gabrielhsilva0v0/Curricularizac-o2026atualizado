const r3Opt = [1, 2, 1, 3, 2]
const rVF = [0, 1, 1, 0, 1, 0, 1]
const listPerguntas =
    [
        "A fenarreco acontece uma vez por semana",
        "No centro de Brusque tem um Zoológico",
        "Brusque tem uma cultura alemã",
        "O nome do rio de Brusque é Rio Dragão",
        "Brusque existe a mais de 100 anos",
        "O marreco é um tipo de cachorro",
        "Um doce típico de Brusque é a Cuca"
    ]
var perg = 0;
var hold = 0;
document.getElementById("pergunta").innerHTML = listPerguntas[perg];
document.getElementById("VF").addEventListener("submit", function (event) {

    event.preventDefault();

    let resposta = event.submitter.value;
    if (hold == 0) {
        if (resposta == rVF[perg]) {
            hold = 1;
            document.getElementById("resultado").classList = "animB1";
            document.getElementById("estrela").classList = "animS1";
            document.getElementById("animation").classList = "corretoAnim"
            setTimeout(() => {
                document.getElementById("animation").className = ""
                document.getElementById("resultado").classList = "hidden";
                document.getElementById("estrela").classList = "hidden";
                if (perg < (rVF.length) - 1) {
                    perg++;
                    document.getElementById("pergunta").innerHTML = listPerguntas[perg];
                }
                hold = 0;
            }, 2500);


        }
        else {
            hold = 1;
            document.getElementById("animation").className = "erradoAnim"
            setTimeout(() => {
                document.getElementById("animation").className = ""
                hold = 0;
            }, 750);
        }
    }
});