var tela = document.querySelector(".pixels")
var x = 1;
var y = 1;
for(let i = 1; i <= 3807; i++){
    tela.innerHTML += `<div data-x=${x} data-y=${y} class="pixel"></div>`
    x++
    if(i % 81 == 0){
        x = 1;
        y++
    }
}


