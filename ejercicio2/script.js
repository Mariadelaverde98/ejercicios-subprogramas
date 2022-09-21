//Una función que devuelva el número de cifras de un entero solicitado al usuario
function numCifras() {
    let numero = parseInt(window.prompt("Introduce un número entero: "));
    let cifras = 0;
    do{
        cifras++;
        numero = Math.floor(numero/10);
    }while(numero != 0)
    alert(cifras);
}

/*Una función que muestre al usuario una secuencia de * (se debe construir la cadena de uno en uno),
 la cantidad de * será solicitada al usuario*/
function secuencia() {
    let cantidad = window.prompt("Introduce una cantidad: ");
    let secuencia = '';
    for (let i = 0; i < cantidad; i++) {
        secuencia += '*';
    }
    alert(secuencia);
}

//Una función que permita mostrar la secuencia (se debe construir la cadena de uno en uno)  *+_*+_*+_*+_:
function secuencia2() {
    let secuencia = '';
    for (let i = 0; i < 12; i++) {
        if (i % 3 == 0) {
            secuencia += '*';
        } else if (i % 3 == 1) {
            secuencia += '+';
        } else {
            secuencia += '_';
        }
    }
    console.log(secuencia);
}
secuencia2();
//Una función que permita mostrar un triángulo como el siguiente:
/*
*
**
***
****
*****
*/
function triangulo() {
    let secuencia;
    for (let i = 1; i <= 5; i++) {
        secuencia = '*';
        for (let j = 1; j < i; j++) {
            secuencia += '*';
        }
        console.log(secuencia);
    }
}

//Una función que devuelva la diferencia en días entre dos 
//fechas del mismo año (sólo tenemos en cuenta dia y mes)
//supongamos que la fecha viene en un formato "dd-mm"
function diferencia() {
    let fecha1;
    let fecha2;
    let formatoCorrecto;
    do{
        fecha1 = window.prompt("Introduce una fecha (dd-mm): ");
        fecha2 = window.prompt("Introduce otra fecha (dd-mm): ");
        formatoCorrecto = compruebaFormato(fecha1) && compruebaFormato(fecha2);
        if(!formatoCorrecto) {
            alert('Formato de fechas incorrecto!');
        }
    }while(!formatoCorrecto)

    let diferencia = 0;
    let dia1 = parseInt(fecha1.substring(0, 2));
    let mes1 = parseInt(fecha1.substring(3, 5));
    let dia2 = parseInt(fecha2.substring(0, 2));
    let mes2 = parseInt(fecha2.substring(3, 5));
    let calendario = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (mes1 == mes2) {
        return Math.abs(dia1 - dia2);
    } else if(mes1 < mes2) {
        for (let i = mes1; i <= mes2; i++) {
            if (i == mes1) {
                diferencia += calendario[mes1 - 1] - dia1;
            } else if (i == mes2) {
                diferencia += dia2;
            } else {
                diferencia += calendario[i];
            }
        }
    } else {
        for (let i = mes2; i <= mes1; i++) {
            if (i == mes2) {
                diferencia += calendario[mes2 - 1] - dia2;
            } else if (i == mes1) {
                diferencia += dia1;
            } else {
                diferencia += calendario[i];
            }
        }
    }
    alert(diferencia);
}

function compruebaFormato(fecha) {
    let esNumero;
    if(fecha.length != 5) {
        return false;
    } else {
        for(let i = 0; i < 5; i++) {
            esNumero = !isNaN(fecha[i]);
            if(i == 2 && fecha[i] != '-') {
                return false;
            } else if (i !=2 && !esNumero) {
                return false;
            }
        }
    }
    return true;
}