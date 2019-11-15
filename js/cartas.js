var jugador1=prompt("Introduce el nombre del jugador 1.");
var jugador2=prompt("Introduce el nombre del jugador 2.");
document.getElementById("jugador1").innerHTML=jugador1;
document.getElementById("jugador2").innerHTML=jugador2;

function juegoCartas(){
    var J1Puntos1 = numeroAleatorio(1, 12);
    var J1Puntos2 = numeroAleatorio(1, 12);
    var J2Puntos1 = numeroAleatorio(1, 12);
    var J2Puntos2 = numeroAleatorio(1, 12);

    if (J1Puntos1 >= J1Puntos2){
        alto1=J1Puntos1;
    } else {
        alto1=J1Puntos2;
    }

    if (J2Puntos1 >= J2Puntos2){
        alto2=J2Puntos1;
    } else {
        alto2=J2Puntos2;
    }
    
    document.getElementById("resultado1").innerHTML=J1Puntos1 + " + " + J1Puntos2;
    document.getElementById("resultado2").innerHTML=J2Puntos1 + " + " + J2Puntos2;
    document.getElementById("suma1").innerHTML="Más alto: " + alto1;
    document.getElementById("suma2").innerHTML="Más alto: " + alto2;
    if (alto1 > alto2){
        document.getElementById("victoria").innerHTML="¡El ganador es " + jugador1 +"!"; 
    } else if (alto2 > alto1){
        document.getElementById("victoria").innerHTML="¡El ganador es " + jugador2 +"!";
    } else {
        document.getElementById("victoria").innerHTML="¡Empate!";
    }
}

function numeroAleatorio(min, max){
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}