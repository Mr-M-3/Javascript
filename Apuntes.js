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

//MIRAR LAS FUNCIONES QUE SE PUEDEN ALMACENAR EN LAS VARIABLES

//mirar diferencia entre == o === (con el triple igual no te deja hacer casting,
//   miralos tipos el triple igual)

//hay 'verdaderito y falsito' , los valores 'falsitos' son:
// aquellos que, al evaluarse en un contexto booleano, se consideran como false:
/* false → el booleano falso literal.
0 → el número cero.
-0 → el número cero negativo.
0n → el cero en tipo BigInt.
"" → la cadena vacía (comillas simples, dobles o backticks sin contenido).
null → valor nulo.
undefined → valor no definido.
NaN → Not-a-Number.*/

/*ROW FUNCTIONS 
(mirar que es una funcion anonima y que implica)
se quita el function

const add = (x:number,y:number)=>{return x +y }

y si solo ocupa una linea :
const add2 = (x:number,y:number)=> x +y

y si solo tiene un parametro
const add3 = x:number => x + 1 ;

currificacion:consiste en convertir una funcion que recibe varios aprametros en una
funcion que recibe un parámetro

Ejercicio: implementar con numero arbitrario de parametros el curry.ts
*/
