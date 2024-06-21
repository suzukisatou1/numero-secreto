let listaDeNumerosSorteados =[] ;  
let numeroLimite = 10 
 let numeroSecreto = gerarNumeroAleatorio();
 let tentativas = 1;
 
 function exibirTextoNaTela(tag,texto) {
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
 }
 function exibirMensagemInicial() {
   exibirTextoNaTela('h1', 'jogo do numero secreto');
   exibirTextoNaTela('p', 'escolha um numero de 1 a 10');
 }

 exibirMensagemInicial()
 
 
 function verificarChute() {
     let chute = document.querySelector('input').value

     if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas':'tentativa';
        let mensagemTentativas = `você descobriu o numero secreto com ${tentativas} ${palavraTentativa} !`;
        exibirTextoNaTela('p',mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');
     }else{
        if (chute > numeroSecreto) {
        exibirTextoNaTela('p','o numero secreto é menor')
     } else{
        exibirTextoNaTela('p','o numero secreto é maior')
     }
         tentativas++;
         limparCampo()
    }
}

function gerarNumeroAleatorio () {
   let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
   let (quatidadeDeElementosNaLista = 10);listaDeNumerosSorteados.lenght;
   if (quatidadeDeElementosNaLista == numeroLimite)
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
    }else {
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(listaDeNumerosSorteados)
      return numeroEscolhido;
    }
 }

function limparCampo() {
   chute =  document.querySelector('input');
   chute.value= '';
}



function reiniciarJogo () {
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true);
}