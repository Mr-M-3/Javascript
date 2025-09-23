//sumArray([1,2,3]) ->6
function sumArray(...array: number[]): number {
    let suma: number = 0;
    for (let i = 0; i < array.length; i++) {
        suma = suma + array[i];
    }
    return suma;
}

//numberOfEvens([1,2,3,4])->2
function numberOfEvens(...array: number[]): number {
    let evens: number = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0)
            evens++;
    }
    return evens;
}

//acronym(['As','Soon','As','Possible'])->ASAP
function acronym(...array: String[]): String {
    let acronimo: String = "";
    for (let i = 0; i < array.length; i++) {
        acronimo = acronimo + array[i].charAt(0).toUpperCase();
    }
    return acronimo;
}


//probar funciones
let funcionUno: number = sumArray(1, 2, 3, 6);
console.log(funcionUno);

let funcionDos: number = numberOfEvens(1, 2, 3, 6, 12, 33);
console.log(funcionDos);

let funcionTres: String=acronym('As','Soon','As','Possible');
console.log(funcionTres);