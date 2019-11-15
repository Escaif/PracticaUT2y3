var aleatorio = numeroAleatorio(1,10);
switch(aleatorio){
    case 1:
        var palabra = "aprobado";
        break;
    case 2:
        var palabra = "barbacoa";
        break;
    case 3:
        var palabra = "destello";
        break;
    case 4:
        var palabra = "hechizar";
        break;
    case 5:
        var palabra = "mercader";
        break;
    case 6:
        var palabra = "sorpresa";
        break;
    case 7:
        var palabra = "tornillo";
        break;
    case 8:
        var palabra = "vainilla";
        break;
    case 9:
        var palabra = "profesor";
        break;
    case 10:
        var palabra = "jabalina";
        break;
    }

function juegoAhorcado(){
    var letra = prompt("Introduce una letra.");
    letra = letra.toLowerCase();
    var comprobar = new RegExp(letra,"g");
    if (comprobar.test(palabra)){
        var cuenta = palabra.match(comprobar).length;
        document.getElementById("victoria").style.color = "rgb(86, 226, 86)";
        document.getElementById("victoria").innerHTML='¡La palabra oculta contiene la letra "' + letra + '" ' + cuenta + " vez/es!";
    } else {
        document.getElementById("victoria").style.color = "rgb(226, 86, 86)";
        document.getElementById("victoria").innerHTML='¡La letra "' + letra + '" no está dentro de la palabra seleccionada!'; 
    }
}

function numeroAleatorio(min, max){
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}