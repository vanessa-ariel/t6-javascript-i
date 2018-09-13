// Escreva um loop em Javascript
// que gera uma matriz de zeros 5x5.
// [ [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0] ]

let matrix = new Array() //created new array 
for(let i=0 ; i<5 ; i++){ //first line of array with 5 items 
    
    const line = []; 
    matrix.push(line);

    for(let j=0 ; j<5 ; j++){ //the variable should be different from the one in the fist loop
        line.push(0)
    }
}
console.log(matrix)

// or...
let linha = []
for (let i = 0; i < 5; i++) {
    linha.push(0)
}
let matrix = []
for (let i = 0; i < 5; i++) {
    matrix.push(linha)
}


/*
--------1st ITERATION
i is assigned the value of 0 
Declared new variable innerArray
Inserted innerArray into arr
Inserted 5 items into arr using another loop with 5 items

--------2nd ITERATION
i is assigned the value of 1
Declared new variable innerArray
Inserted innerArray into arr
Inserted 5 items into arr using another loop with 5 items
*/




// Escreva um loop em Javascript
// que gera uma matriz no seguinte
// formato:
// [ [0, 1, 2, 3, 4],
//   [1, 0, 1, 2, 3],
//   [2, 1, 0, 1, 2],
//   [3, 2, 1, 0, 1],
//   [4, 3, 2, 1, 0] ]
let matriz = []
for (let j = 0; j < 5; j++) { // A
    let linha = []
    for (let i = 0; i < 5; i++) { // B
        linha.push(Math.abs(i - j))
    }
    matriz.push(linha)
}

<<<<<<< HEAD

let matrix = new Array() //created new array 
for(let i=0 ; i<5 ; i++){ //first line of array with 5 items 
    
    const line = []; 
    matrix.push(line);
    
    for(let j=0 ; j<5 ; j++){ //the variable should be different from the one in the fist loop
        line.push(Math.abs(i-j)) // first use the value of j, than i-j
    }
}
console.log(matrix)

// 1 iteration A -> j = 0; matrix = []
    // 1 iteration B -> i = 0; line = []; line.push(0 - 0) -> line = [0]
    // 2 iteration B -> i = 1; line = [0]; line.push(1 - 0) -> line = [0, 1]
    // 3 iteration B -> i = 2; line = [0, 1]; line.push(2 - 0) -> line = [0, 1, 2]
    // 4 iteration B -> i = 3; line = [0, 1, 2]; line.push(3 - 0) -> line = [0, 1, 2, 3]
    // 5 iteration B -> i = 4; line = [0, 1, 2, 3]; line.push(4 - 0) -> line = [0, 1, 2, 3, 4]
// matrix.push([0, 1, 2, 3, 4]) -> matrix = [[0, 1, 2, 3, 4]]
// 2 iteration A -> j = 1; matrix = [[0, 1, 2, 3, 4]]
    // 1 iteration B -> i = 0; line = []; line.push(0 - 1) -> line = [-1]
    // 2 iteration B -> i = 1; line = [-1]; line.push(1 - 1) -> line = [-1, 0]
    // 3 iteration B -> i = 2; line = [-1, 0]; line.push(2 - 1) -> line = [-1, 0, 1]
    // 4 iteration B -> i = 3; line = [-1, 0, 1]; line.push(3 - 1) -> line = [-1, 0, 1, 2]
    // 5 iteration B -> i = 4; line = [-1, 0, 1, 2]; line.push(4 - 1) -> line = [-1, 0, 1, 2, 3]
// matrix.push([-1, 0, 1, 2, 3]) -> matrix = [[0, 1, 2, 3, 4], [-1, 0, 1, 2, 3]]
// ...


=======
// 1 iteracao A -> j = 0; matriz = []
    // 1 iteracao B -> i = 0; linha = []; linha.push(0 - 0) -> linha = [0]
    // 2 iteracao B -> i = 1; linha = [0]; linha.push(1 - 0) -> linha = [0, 1]
    // 3 iteracao B -> i = 2; linha = [0, 1]; linha.push(2 - 0) -> linha = [0, 1, 2]
    // 4 iteracao B -> i = 3; linha = [0, 1, 2]; linha.push(3 - 0) -> linha = [0, 1, 2, 3]
    // 5 iteracao B -> i = 4; linha = [0, 1, 2, 3]; linha.push(4 - 0) -> linha = [0, 1, 2, 3, 4]
// matriz.push([0, 1, 2, 3, 4]) -> matriz = [[0, 1, 2, 3, 4]]
// 2 iteracao A -> j = 1; matriz = [[0, 1, 2, 3, 4]]
    // 1 iteracao B -> i = 0; linha = []; linha.push(0 - 1) -> linha = [-1]
    // 2 iteracao B -> i = 1; linha = [-1]; linha.push(1 - 1) -> linha = [-1, 0]
    // 3 iteracao B -> i = 2; linha = [-1, 0]; linha.push(2 - 1) -> linha = [-1, 0, 1]
    // 4 iteracao B -> i = 3; linha = [-1, 0, 1]; linha.push(3 - 1) -> linha = [-1, 0, 1, 2]
    // 5 iteracao B -> i = 4; linha = [-1, 0, 1, 2]; linha.push(4 - 1) -> linha = [-1, 0, 1, 2, 3]
// matriz.push([-1, 0, 1, 2, 3]) -> matriz = [[0, 1, 2, 3, 4], [-1, 0, 1, 2, 3]]
// ...
>>>>>>> d45d84367b2592f1c13abf0ce0e73f98683fb306

// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// *******  
// ******
// *****
// ****
// ***
// **
// *
<<<<<<< HEAD

for (let j = 0; j < 7; j++) { 
    let  = ""
    for (let i = 0; i < (7 - j); i++) { 
         += "*"
    }
    console.log()
}
//or...
for (let j = 0; j < 7; j++) { 
    let  = ""
    for (let i = j; i < 7; i++) { 
         += "*"
    }
    console.log()
}
//or...
let  = "********"
while (.length > 1) {
     = .substr(1, (.length - 1))
    console.log()
}
//or...
let  = ["*", "*", "*", "*", "*", "*", "*", "*"]
for (let i = 7; i < 7; i++) {
     = .slice(1)
    console.log(.join(""))
}
//or...
let  = ["*", "*", "*", "*", "*", "*", "*", "*"]
for (let i = 0; i < 7; i++) {
    .pop() 
    console.log(.join(""))
=======
for (let j = 0; j < 7; j++) { 
    let asteriscos = ""
    for (let i = 0; i < (7 - j); i++) { 
        asteriscos += "*"
    }
    console.log(asteriscos)
}
// ou...
for (let j = 0; j < 7; j++) { 
    let asteriscos = ""
    for (let i = j; i < 7; i++) { 
        asteriscos += "*"
    }
    console.log(asteriscos)
}
// ou...
let asteriscos = "********"
while (asteriscos.length > 1) {
    asteriscos = asteriscos.substr(1, (asteriscos.length - 1))
    console.log(asteriscos)
}
// ou...
let asteriscos = ["*", "*", "*", "*", "*", "*", "*", "*"]
for (let i = 7; i < 7; i++) {
    asteriscos = asteriscos.slice(1)
    console.log(asteriscos.join(""))
}
// ou...
let asteriscos = ["*", "*", "*", "*", "*", "*", "*", "*"]
for (let i = 0; i < 7; i++) {
    asteriscos.pop() 
    console.log(asteriscos.join(""))
>>>>>>> d45d84367b2592f1c13abf0ce0e73f98683fb306
}

// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
<<<<<<< HEAD
// 1234567 

=======
// 1234567
>>>>>>> d45d84367b2592f1c13abf0ce0e73f98683fb306
for (let j = 1; j <= 7; j++) {
    let linha = ""
    for (let k = 1; k <= j; k++) {
        linha += k
    }
    for (let i = j; i < 7; i++) { 
        linha += "*"
    }
    console.log(linha)
}
<<<<<<< HEAD
// or...
=======
// ou...
>>>>>>> d45d84367b2592f1c13abf0ce0e73f98683fb306
let digitos = ""
for (let i = 1; i <= 7; i++) {
    digitos += i
    let numero_com_asteriscos = digitos
    for (let j = 7; j > i; j--) {
        numero_com_asteriscos += "*"
    }
    console.log(numero_com_asteriscos)
}