//Realiza todos los ejercicios de las estructuras haciendo uso de un único fichero HTML, un único fichero Javascript y funciones (debes usar al menos una de cada tipo).

//Solicita al usuario tres números enteros e indícale cuál es el menor.
function ejer1() {
    var n1 = window.prompt("Inserta un número entero: ");
    var n2 = window.prompt("Inserta un número entero: ");
    var n3 = window.prompt("Inserta un número entero: ");
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    n3 = parseInt(n3);
    if(n1 <= n2 && n1 <= n3) {
        alert("n1 es el menor");
    }
    if(n2 <= n1 && n2 <= n3) {
        alert("n2 es el menor");
    }
    if(n3 <= n2 && n3 <= n1) {
        alert("n3 es el menor");
    }
}


//Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.
const ejer2 = function(){ 
    var frase = window.prompt("Inserta una frase: ");
    var letra = window.prompt("Inserta una letra: ");
    var contador = 0;
    for(let i = 0; i < frase.length; i++){
        if(frase[i] == letra) {
            contador++;
        }
    }
    alert("la letra aparece " + contador + " veces");
 }


//Suma o resta (según elija el usuario) dos números reales
(function ejer3() {   
    var numero1 = window.prompt("Inserta un numero: ");
    var numero2 = window.prompt("Inserta otro numero: ");
    var operacion = window.prompt("Indique suma o resta (s/r): ");
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    if(operacion == 's') {
        alert(numero1 + numero2);
    }
    if(operacion == 'r') {
        alert(numero1 - numero2);
    }
    if(operacion != 'r' && operacion != 's') {
        alert('has metido mal la letra')
    }
})();

//Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)
const ejer4 = () => {
    const user = "usuario";
    const pass = "contraseña";
    var intentos = 0;
    var correcto = false;
    var usuario;
    var contraseña;
    do{
        usuario = window.prompt("Inserta tu usuario: ");
        contraseña = window.prompt("Inserta tu contraseña: ");
        correcto = usuario == user && contraseña == pass;
        if (correcto) {
            alert('todo correcto');
        }else{
            intentos++;
            alert('usuario o contraseña incorrectos');
        }  
    }while(!correcto && intentos < 3)
}

//Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra
function ejer5(){
    var letra = prompt("Introduce una letra: ");
    switch(letra) {
        case 'a':
            alert("7");
            break;
        case 'b':
            alert("9");
            break;
        case 'c':
            alert("101");
            break;
        default:
            alert("Te has equivocado de letra");
            break;
    }
}

//Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja
function ejer6(palabras) {
    for(let i = 0; i <= palabras.length - 2; i++) {
        for(let j = 0; j <= palabras.length - i - 2; j++) {
            if(palabras[j] > palabras[j+1]) {
                var aux = palabras[j];
                palabras[j] = palabras[j+1];
                palabras[j+1] = aux;
            }
        }
    }
}