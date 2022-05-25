let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;



const palavras = [
    palavra001 = {
        nome: "MAKIMA",
        categoria:"WAIFU"
    },
    palavra002 = {
        nome: "KAGUYA",
        categoria:"WAIFU"
    },
    palavra003 = {
        nome: "AKARIN",
        categoria:"WAIFU"
    },
    palavra004 = {
        nome: "HIMENO",
        categoria:"WAIFU"
    },
    palavra005 = {
        nome: "SAKURA",
        categoria:"WAIFU" },

    palavra006 = {
        nome: "SUPERMAN",
        categoria:"HERÓI"
    },
    palavra007 = {
        nome: "Power",
        categoria:"WAIFU"
    },
    palavra008 = {
        nome: "KIRYUIN",
        categoria:"WAIFU"
    },
    palavra009 = {
        nome: "SATANIA",
        categoria:"WAIFU"
    },
    palavra010 = {
        nome: "ROBIN",
        categoria:"WAIFU"
    },
    palavra011 = {
        nome: "SHINOBU",
        categoria:"WAIFU"
    },
    palavra012 = {
        nome: "NARGAS",
        categoria:"OBJETO"
    },
    palavra013 = {
        nome: "GUSTAVO",
        categoria:"AMIGO"
    },
    palavra014 = {
        nome: "KONOSUBA",
        categoria:"ANIME"
    },
    palavra015 = {
        nome: "OVERLORD",
        categoria:"ANIME"
    }

];

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    
    console.log(palavraSecretaSorteada)
}


montarPalavraTela();
function montarPalavraTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
   
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }

}

 function verificaLetraEscolhida(letra){
     document.getElementById("tecla-" + letra).disabled = true;
     if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra);
        comparaLista(letra);
        montarPalavraTela();
     }
     
 }
 
 function mudarStyleLetra(tecla){
     document.getElementById(tecla).style.background ="#C71585";
     document.getElementById(tecla).style.color ="#FFFFFF";
 }

 function comparaLista(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
     if(pos < 0) {
         tentativas--
         carregaImagemMakima()

         if(tentativas == 0){
             abreModal("BANG !", "Perdeu parça, a palavra era <br>" + palavraSecretaSorteada);
         }

     }
     else {
         for(i=0; i < palavraSecretaSorteada.length; i++)
         {
             if(palavraSecretaSorteada[i]==letra ) {
                 listaDinamica[i] = letra;
             }
         }
     }

     let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS!", "Acertou !");
        
        tentativas = 0;
        carregaImagemMakimaVitoria()
    }
}


    function carregaImagemMakima(){
        switch(tentativas){
            case 0:
                document.getElementById("imagem").style.background = "url('./img/derrota.png')";
                break;
        }
    }

    function carregaImagemMakimaVitoria(){
        switch(tentativas){
            case 0:
                document.getElementById("imagem").style.background = "url('./img/vitoria.png')";
                break;
        }
    }



    function abreModal( titulo, mensagem) {
        let modalTitulo = document.getElementById("exampleModalLabel");
        modalTitulo.innerText = titulo;

        let modalBody = document.getElementById("modalBody");
        modalBody.innerHTML = mensagem;

        $("#myModal").modal({
            show: true
        });
    }

    let btncReiniciar = document.querySelector("#btncReiniciar")
    btncReiniciar.addEventListener("click", function(){
    location.reload();
});