const r3Opt = [1,2,1,3,2]
const rVF = [0,1,1,0,1,0,1]
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
document.getElementById("pergunta").innerHTML = listPerguntas[perg];
document.getElementById("VF").addEventListener("submit", function(event){

    event.preventDefault();

    let resposta = event.submitter.value;
    
    if(resposta == rVF[perg]){
        document.getElementById("saida").classList = "result";
        document.getElementById("saida").innerHTML = perg;
        if (perg < (rVF.length)-1){
          perg++;
          document.getElementById("pergunta").innerHTML = listPerguntas[perg];  
        }
        
    }
    else{
        document.getElementById("saida").className = "hidden"
    }

});