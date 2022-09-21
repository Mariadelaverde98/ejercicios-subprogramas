function diferencia(fecha1, fecha2) {
    let formatoCorrecto;
    do{
        formatoCorrecto = compruebaFormato(fecha1) && compruebaFormato(fecha2);
        if(!formatoCorrecto) {
            console.log('Formato de fechas incorrecto!');
            break;
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
    console.log(diferencia);
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
diferencia('0m-00','00-00');