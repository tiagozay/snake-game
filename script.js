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


var movimentoY = 0;
var movimentoX = 0;

var px = 1;
var py = 1;
setInterval(function(){
    pegaUmPixel(px, py).style.backgroundColor = 'red'
    px += movimentoX;
    py += movimentoY;
    if(px > 81){
        px = 1;
    }
    if(py > 47){
        py = 1;
    }

    if(px < 1){
        px = 81;
    }
    if(py < 1){
        py = 47;
    }
}, 50)


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
