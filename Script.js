const r3Opt = [1,2,1,3,2]
const rVF = [0,1,1,0,1]

document.getElementById("pergunta").innerHTML = "Pergunta";
document.getElementById("VF").addEventListener("submit", function(event){

    event.preventDefault();

    let resposta = event.submitter.value;

    if(resposta == rVF[0]){
        document.getElementById("saida").innerHTML = "correto";
    }
    else{
        document.getElementById("saida").innerHTML = "incorreto";
    }

});