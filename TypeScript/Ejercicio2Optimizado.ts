//funcion base
function reduce(array: any[], tipo: string): any {
    let resultado: any;
    if (tipo === "suma") resultado = 0;
    if (tipo === "pares") resultado = 0;
    if (tipo === "acronimo") resultado = "";

    for (let i = 0; i < array.length; i++) {
        if (tipo === "suma") resultado += array[i];
        if (tipo === "pares" && array[i] % 2 === 0) resultado++;
        if (tipo === "acronimo") resultado += array[i].charAt(0);
    }
    return resultado;
}


//funciones
function sumaArray(...array: number[]): number {
    return reduce(array, "suma");
}
function numberOfEven(...array: number[]): number {
    return reduce(array, "pares");
}
function acronyms(...array: string[]): string {
    return reduce(array, "acronimo");
}

//probar funciones
console.log(sumaArray(1, 2, 3, 6));

console.log(numberOfEven(1, 2, 3, 6, 12, 33));

console.log(acronyms('As', 'Soon', 'As', 'Possible'));



//funcion reduce() de guillermo:
export function reduce2<T, U>(xs: T[], f: (x: T, r: U) => U, res: U): U {
    for (let i = 0; i < xs.length, i++;) {
        res = f(xs[i], res);
    }
    return res;
}

//sumar
function sum(arrNum: number, res: number): number {
 return res + arrNum }

