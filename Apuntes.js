//--VARIABLES--
 //para definir una variable
 let nombre="Pepe";
 console.log(nombre);

 //puedes ver el tipo de variable
 console.log(typeof nombre);
 
 //puedes meter una funcion dentro de una variable . Sirve , por ejemplo , para pasarla como parametro o devolver una funcion
 let saludo=function(nombre){
    console.log("Hola "+  nombre );
 }
 saludo("Juan");

	

//--ARRAYS--
//crea un array  , funcionan como un arraylist
function array(...lista){
    console.log(lista);
    console.log(lista[0],lista[1],lista[2]);
}
 hola("Pepe");
 array("Pepe","Juan","Ana");
 //otra forma 
 let array2 = [1,2,3,4];

 //si creas un array e introduces valores vacios , el array los reserva
 let array3 = new Array(300);
array3[0]=1;
array3[299]=2;
array3.length //tiene 300 elementos 


//tambien hay funciones como slice y splice
//slice crea una copia de una parte del array . Primero se pasa el indice de inicio y luego el indice final (no incluido)
let array4=array2.slice(1,3);
console.log(array4);

//splice elimina o añade elementos a un array . Primero se pasa el indice , luego el numero de elementos a eliminar y luego los elementos a añadir
array2.splice(1,2,"Pepe","Juan");
console.log(array2);

//añade elementos al final (push)
let numeros = [1, 2, 3];
numeros.push(4);  
console.log(numeros); // [1, 2, 3, 4]

//--BUCLES--

//for
for(let i=0;i<array2.length;i++){
    console.log(array2[i]);
}

//con el operador in (contiene el indice)
for(let i in array2){
    console.log(array2[i]);
} 

//el operador of (contiene el valor , no el indice)  
for(let valor of array2){
    console.log(valor);
}

