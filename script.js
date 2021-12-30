var quantidadeDePixelsX = 35;
var quantidadeDePixelsY = 20;

var tamanho = 5;

var movimentoY = 0;
var movimentoX = 1;

var px = 1;
var py = 1;

var pixeisGerados = [];

setInterval(function(){
    detectaColisaoComAlimento()
    pixelParaSerPintado = pegaUmPixel(px, py);
    pixelParaSerPintado.classList.add("pixelPintado")
    pixeisGerados.push(pixelParaSerPintado)

    px += movimentoX;
    py += movimentoY;
    detectaColisaoComBordasEMoveParaOutroLado()

    if(pixeisGerados.length > tamanho){
        pixeisGerados[0].classList.remove("pixelPintado")
        pixeisGerados.shift();
    }

}, 100)


document.onkeydown = function(){
    if(event.keyCode == 38){
        //cima
        if(movimentoY != 1){
            movimentoY = -1;
            movimentoX = 0;
        }
    }else if(event.keyCode == 40){
        //baixo
        if(movimentoY != -1){
            movimentoY = 1;
            movimentoX = 0;
        }
      
    }else if(event.keyCode == 39){
        //direita
        if(movimentoX != -1){
            movimentoX = 1;
            movimentoY = 0;
        }
       
    }else if(event.keyCode == 37){
        //esquerda
        if(movimentoX != 1){
            movimentoX = -1;
            movimentoY = 0;
        }
     
    }
    
}

function pegaUmPixel(x, y){
    var elementos = document.querySelectorAll(`[data-x='${x}']`)
    var elemento = null;
    elementos.forEach(function(element){
        if(element.dataset.y == y){
            elemento = element;
        }
    })
    return elemento;
}

function detectaColisaoComBordasEMoveParaOutroLado(){
    if(px > 44){
        px = 1;
    }
    if(py > 24){
        py = 1;
    }

    if(px < 1){
        px = 44;
    }
    if(py < 1){
        py = 24;
    }
}


var pxAlimento
var pyAlimento 
gerarAlimento()
function gerarAlimento(){
    pxAlimento = Math.round(Math.random() * (quantidadeDePixelsX - 1) + 1)
    pyAlimento =  Math.round(Math.random() * (quantidadeDePixelsY - 1) + 1)

    pegaUmPixel(pxAlimento, pyAlimento).classList.add("alimento");
}


function detectaColisaoComAlimento(){
    if(pxAlimento == px && pyAlimento == py ){
        pegaUmPixel(pxAlimento, pyAlimento).classList.remove("alimento");
        tamanho++
        gerarAlimento()
    }
}



var array = ['primeiro', 'segundo', 'terceiro', 'quarto']
array.shift();
console.log(array)