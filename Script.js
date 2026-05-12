const r3Opt = [1,2,1,3,2]
const rVF = {priQ:1,segQ:0,terQ:1,qua:0,quiQ:1}

document.getElementById("pergunta").innerHTML = "Pergunta";
document.getElementById("opcao").addEventListener("submit", function(event){

    event.preventDefault();

    let resposta = event.submitter.value;

    if(resposta == rVF.priQ){
        document.getElementById("saida").innerHTML = "correto";
    }
    else{
        document.getElementById("saida").innerHTML = "incorreto";
    }

});