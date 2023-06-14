let arr =  [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ]
for (let index = 0; index < arr[2].length; index++) {
    console.log(arr[2][index]);    
}
console.log(arr[1][0]);
console.log(arr[2][2]);
console.log(arr[2][1]);


// EJERCICIO 2

let arr2 = [ [ ["%", 7, true, "#"] ], [ [false, 0, 99, "?"] ], [ [44, 55, 66, 77] ] ]

console.log(arr2[1][0][3]);
console.log(arr2[2][0][2]);
console.log(arr2[0][0][2]);
console.log(arr2[0][0][0]);

/* 
Complete sin usar el intérprete de Javascript(úselo al final para verificar sus respuestas):
e) arreglo[0][0][2] devolverá = true
f) arreglo[2][0][0] devolverá = 44
g) arreglo[1][0][3] devolverá = ?
h) arreglo[0][1][1] devolverá = error 
*/

// EJERCICIO 3


let arr3 = [ [ [0], [2, 77] ], [ ["&", true, "!!"], [[88]] ], [ [ [ [1] ] ] ], "¿" ]
console.log(arr3[1][0][1]);
console.log(arr3[2][0][0][0][0]);
console.log(arr3[0][1][1]);
console.log(arr3[1][1][0][0]);
console.log(arr3[3]);


// EJERCICIO 4

let arr4 = [ [50, 60, 70], ["q", "%", "$"], ["?", ">", "<"], [1 , -8, -2] ]
arr4[1].splice(1, 1, "?")
console.log(arr4);
arr4[3].splice(1, 1, 9)
console.log(arr4);
arr4[0].splice(0, 2, "¡", "e")
console.log(arr4);
arr4[1].splice(2, 1)
console.log(arr4);
arr4[0].splice(2, 1)
console.log(arr4);
arr4[3].splice(2, 1);
console.log(arr4);