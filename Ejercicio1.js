
//EJERCICIO:crear una funcion que reciba un array con cadenas de caracteres y que devuelva 
// las cadenas que tienen longitud mayor o igual que 3 . Crear otra funcion que reciba numeros
//  y que devuelva los pares. Crear otra que reciba numeros y devuelva los <= 3 
// (solucionar repeticion de codigo)

//1.1 
function cadenas(...lista) {
    let listaconCadenas = [];
    for (let i in lista) {
        if (lista[i].length >= 3)
            listaconCadenas.push(lista[i]);
    }
    return listaconCadenas;
}

//probar la funcion
let ejemplo = ["juan", "ana", "a", "b", "c", "ñu", "hermenegildo"];
console.log(ejemplo);
console.log("Palabras con 3 o más letras: " + cadenas(...ejemplo).join());


//1.2
function numeros(...lista) {
    let listaPares = [];
    for (let i in lista) {
        if (lista[i] % 2 == 0)
            listaPares.push(lista[i]);
    }
    return listaPares;
}

//probar la funcion
let ejemplo2 = [1, 2, 3, 4, 12, 13, 354, 5345345, 2123456];
console.log(ejemplo2);
console.log("Numeros pares: " + numeros(...ejemplo2).join());


//1.3
function numerosTres(...lista) {
    let listaTres = [];
    for(let i=0;i<lista.length;i++){
        if (lista[i] <= 3)
            listaTres.push(lista[i]);
    }
    return listaTres;

}

//probar la funcion
console.log("Numeros menores o iguales que 3: " + numerosTres(...ejemplo2).join());