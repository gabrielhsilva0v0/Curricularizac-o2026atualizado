
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
    const audioList = 
    [
        "assets\\audiosVF\\fenarreco.mp3",
        "assets\\audiosVF\\zoologico.mp3",
        "assets\\audiosVF\\cultura.mp3",
        "assets\\audiosVF\\rio.mp3",
        "assets\\audiosVF\\idade.mp3",
        "assets\\audiosVF\\marreco.mp3",
        "assets\\audiosVF\\cuca.mp3"
    ]
var perg = 0;
var hold = 0;
var audioToPlay = document.getElementById("audio");
document.getElementById("pergunta").innerHTML = listPerguntas[perg];
document.getElementById("audioSrc").src = audioList[perg];
document.getElementById("VF").addEventListener("submit", function (event) {

    event.preventDefault();
    document.getElementById("audioSrc").src = audioList[perg];
    audioToPlay.load();
    
    let resposta = event.submitter.value;
    if (hold == 0) {
        if (resposta == rVF[perg]) {
            hold = 1;
            document.getElementById("animation").classList = "corretoAnim"
            setTimeout(() => {
                document.getElementById("animation").className = ""
                if (perg < (rVF.length) - 1) {
                    perg++;
                    document.getElementById("pergunta").innerHTML = listPerguntas[perg];
                    document.getElementById("audioSrc").src = audioList[perg];
                    audioToPlay.load();
                }
                else if (perg == (rVF.length)-1)
                    {
                        window.location.href="resultado.html";
                    }
                hold = 0;
            }, 850);


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
function playAudio() 
{
    audioToPlay.pause()
    audioToPlay.play()
    return true;

}