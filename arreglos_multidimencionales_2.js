//EJERCICIO 1
let  arr =  [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ]
for (let index = 0; index < arr.length; index++) {
    for (let i = 0; i < arr[index].length; i++) {
        console.log(arr[index][i]);    
    }
}

arr.forEach(i => {
    i.forEach(j => {
        console.log(j);
    });
});

//EJERCICIO 2
let arr2 =  [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55,
    66, 77], [1, 2, 3, 4] ] ]

for (let index = 0; index < arr2.length; index++) {
    for (let j = 0; j < arr2[index].length; j++) {
        for (let i = 0; i < arr2[index][j].length; i++) {
            console.log(arr2[index][j][i]);            
        }   
    }
}

arr2.forEach(index => {
    index.forEach(j => {
        j.forEach(i => {
            console.log(i);
        });
    });
});

//EJERCICIO 3

let arr3 = [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ]
for (let index = 0; index < arr3.length; index++) {
    for (let i = 0; i < arr3[index].length; i++) {
        if (arr3[index][i] % 2 != 0) {
            console.log(arr3[index][i]);
        }
        
    }    
}

let cont = 0
arr3.forEach(index => {
    index.forEach(j => {
        cont+=j
    });
});

console.log(cont);

