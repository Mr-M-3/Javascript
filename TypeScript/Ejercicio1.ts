//1.1 
function cadenasConTresOMasLetras(...lista: string[]): string[] {
    let listaconCadenas: string[] = [];
    for (let i in lista) {
        if (lista[i].length >= 3)
            listaconCadenas.push(lista[i]);
    }
    return listaconCadenas;
}

//probar la funcion
let ejemplo1 = ["juan", "ana", "a", "b", "c", "ñu", "hermenegildo"];
console.log(ejemplo1);
console.log("Palabras con 3 o más letras: " + cadenasConTresOMasLetras(...ejemplo1).join());
