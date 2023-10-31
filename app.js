let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarUmNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function exibirTextoNaTela(tag , texto) {
    
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});

}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1","Jogo do número Secreto");
    exibirTextoNaTela("p","Escolha um número de 1 a 10");

}


console.log(numeroSecreto);



function verificarChute() {

    let chute = document.querySelector("input").value;
    
        
        if (chute == numeroSecreto) {
            
            exibirTextoNaTela("h1", "Boa, acertas-te!");
            
            let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
            let mensagemTentativas = `Conseguiste descobrir o número secreto com ${tentativas} ${palavraTentativa}!`;
            
            
            exibirTextoNaTela("p", mensagemTentativas);
           
            document.getElementById("reiniciar").removeAttribute("disabled");

        }else {
            if(chute > numeroSecreto){
                exibirTextoNaTela("p", "O número secreto é menor");
            }else{
                exibirTextoNaTela("p", "O número secreto é maior");
            }
        }
        tentativas++;
        limparCampo();

}



function gerarUmNumeroAleatorio(){
   
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);  
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;

        if (quantidadeDeNumerosNaLista == numeroLimite) {
            listaDeNumerosSorteados = [];
        }
    
        if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarUmNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
         console.log(listaDeNumerosSorteados)
         return numeroEscolhido;
       
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = ``;
}

function reiniciarJogo(){
    
    numeroSecreto = gerarUmNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    console.log(numeroSecreto);
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
    
}






