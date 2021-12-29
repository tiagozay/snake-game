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

var quantidadeDePixelsX = 35;
var quantidadeDePixelsY = 20;


var tamanho = 5;

var movimentoY = 0;
var movimentoX = 0;

var px = 1;
var py = 1;

var numeroDoPixel = 0;

setInterval(function(){
    detectaColisaoComAlimento()
    pixelParaSerPintado = pegaUmPixel(px, py);
    pixelParaSerPintado.classList.add("pixelPintado")
    pixelParaSerPintado.classList.add("p"+numeroDoPixel)
    pixelParaSerPintado.dataset.numero = numeroDoPixel;
    px += movimentoX;
    py += movimentoY;
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


    var pixels = document.querySelectorAll(".pixelPintado")

    if(pixels.length > tamanho){
        var pxc = document.querySelector(".p"+(numeroDoPixel -tamanho))
        
        pxc.classList.remove('pixelPintado')
    }

    numeroDoPixel++

    pixels.forEach(function(pixel){
        if(pixel.classList[1] != "alimento" && pixel.dataset.numero < numeroDoPixel - tamanho){
            pixel.classList.remove("pixelPintado")
        }
    })

    
}, 50)


document.onkeydown = function(){
    if(event.keyCode == 38){
        //cima
        // movimentoY = -1;
        // movimentoX = 0;
        if(movimentoY != 1){
            movimentoY = -1;
            movimentoX = 0;
        }
    }else if(event.keyCode == 40){
        //baixo
        // movimentoY = 1;
        // movimentoX = 0;
        if(movimentoY != -1){
            movimentoY = 1;
            movimentoX = 0;
        }
      
    }else if(event.keyCode == 39){
        //direita
        // movimentoX = 1;
        // movimentoY = 0;
        if(movimentoX != -1){
            movimentoX = 1;
            movimentoY = 0;
        }
       
    }else if(event.keyCode == 37){
        //esquerda
        // movimentoX = -1;
        // movimentoY = 0;
        if(movimentoX != 1){
            movimentoX = -1;
            movimentoY = 0;
        }
     
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
    console.log(pxAlimento, px)
    if(pxAlimento == px && pyAlimento == py ){
        pegaUmPixel(pxAlimento, pyAlimento).classList.remove("alimento");
        tamanho++
        gerarAlimento()
    }
}