function verificar(resposta){

    const resultado =
    document.getElementById("resultado");

    if(resposta == 1){
        resultado.innerText = "Resposta correta!";
    }else{
        resultado.innerText = "Resposta errada!";
    }

}