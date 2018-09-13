// Escreva um loop em Javascript
// que vai calcular a soma de todos
// os números entre 0 e 300.
let soma = 0
for (let i = 0; i <= 300; i++) {
	soma += i // soma = soma + i
}
for (let i = 0; i <= 300; i++) {
	soma += i // soma = soma + i
}
for (let i = 0; i <= 300; i++) {
	soma += i // soma = soma + i
}
for (let i = 0; i <= 300; i++) {
	soma += i // soma = soma + i
}
for (let i = 0; i <= 300; i++) {
	soma += i // soma = soma + i
}

// para maximo = 3
// 1 iteracao -> soma = 0; i = 0 -> soma = 0 + 0 = 0
// 2 iteracao -> soma = 0; i = 1 -> soma = 0 + 1 = 1
// 3 iteracao -> soma = 1; i = 2 -> soma = 1 + 2 = 3
// 4 iteracao -> soma = 3; i = 3 -> soma = 3 + 3 = 6
// 5 iteracao -> soma = 6; i = 4 // PARA
// FINAL -> soma = 6

// Escreva um loop em Javascript
// que vai calcular a seguinte soma:
// 1 * 1 + 2 * 2 + 3 * 3 + ... + 400 * 400
let soma = 0
for (let i = 1; i <= 400; i++) {
	// soma += i * i
	// soma += Math.pow(i, 2)
	soma += i ** 2
}

// para maximo = 3
// 1 iteracao -> soma = 0; i = 1 -> soma = 0 + 1 * 1 = 1
// 2 iteracao -> soma = 1; i = 2 -> soma = 1 + 2 * 2 = 5
// 3 iteracao -> soma = 5; i = 3 -> soma = 5 + 3 * 3 = 14
// 4 iteracao -> soma = 14; i = 4 // PARA
// FINAL -> soma = 14

let soma = 0
let x, y
for (x = 1, y = 1; x <= 400, y <= 400; x++, y++) {
	let z = x * y
	soma += z
}

// Escreva um loop em Javascript
// que vai calcular a seguinte soma:
// 1 * 2 + 2 * 3 + 3 * 4 + ... + 249 * 250
let soma = 0
for (let i = 2; i <= 250; i++) {
	soma += i * (i - 1)
}

// para maximo = 3
// 1 iteracao -> soma = 0; i = 2 -> soma = 0 + 2 * (2 - 1) = 2
// 2 iteracao -> soma = 2; i = 3 -> soma = 2 + 3 * (3 - 1) = 8
// 3 iteracao -> soma = 8; i = 4 -> soma = 8 + 4 * (4 - 1) = 20
// 4 iteracao -> soma = 20; i = 5 -> soma = 20 + 5 * (5 - 1) = 40
// 5 iteracao -> soma = 40; i = 6 // PARA
// FINAL -> soma = 40

for (let i = 1; i < 250; i++) {
	soma += i * (i + 1)
}

let soma = 1
let multi = 1
for (let i = 1; i <= 249; i++) {
	multi = i * (i + 1)
	soma = soma + multi
}

for (x = 1, y = 2; x <= 249, y <= 250; x++, y++) {
	let z = x * y
	soma += z
}

// Escreva um loop em Javascript que
// vai calcular 10! (10 fatorial), o
// que significa 10 * 9 * 8 * 7 ... * 1.
let fatorial = 10
for (let i = fatorial - 1; i > 0; i--) {
	fatorial *= i // fatorial = fatorial * i
}

let fatorial = 10
let aux = 1
for (let i = 1; i <= fatorial; i++) {
	aux *= i
}

// Escreva um loop em Javascript que 
// calcula quantos termos a soma
// 1 + 2 + 3 + ... precisa para
// que o resultado dela exceda um milhão.
let soma = 0 //declare variable
let i = 0 //
while (soma <= 1000000) {
	i++ // i = i + 1
	soma += i
}
console.log("termos", i)
console.log("soma", soma)

// Escreva um loop em Javascript que
// simule o problema 3x + 1 para o número 5.
// ref: https://pt.wikipedia.org/wiki/Conjectura_de_Collatz
// "Esta conjectura aplica-se a qualquer 
// número natural não nulo, e diz-nos para, 
// se este número for par, o dividir 
// por 2 (/2), e se for impar, para 
// multiplicar por 3 e adicionar 1 (*3+1).
// Desta forma, por exemplo, se a sequência 
// iniciar com o número 5 ter-se-á: 5; 16; 8; 4; 2; 1".

//SOLVED EXERCISE 
let collatz // declare variable
while (collatz >1){ // loop to be executed while collatz value is greater than 1 
	if (collatz % 2 === 0){ // if its even
		collatz = collatz / 2 // divide by two
	} else { // if not
		collatz = collatz * 3 + 1 //multiply by 3 and add 1
	}
	console.log(collatz) //displays collatz value
}

// Escreva um loop em Javascript
// que gera uma lista com 100
// número randomicos.

let arr = []
for(let i = 0 ; i< 100; i++){ // the loop will be executed as long as let is shorter than 100
	arr.push(Math.floor(Math.random()*100)) //
}

// Escreva um loop em Javascript
// que "lance uma moeda" a cada 
// nova iteração. Considere 1 = cara,
// 0 = coroa. Rode esse loop 1000 vezes e
// printe o numero de caras e o numero
// de coroas no console.

//SOLVED EXERCISE 
let cara = 0
let coroa = 0
for (i=0; i<1000; i++){ // the loop will be executed as long as let is shorter than 1000
	let moeda = Math.floor(Math.random()*2)
	if (moeda===1){
		cara++
	}else{
		coroa++
	}
}
console.log ("cara",cara)
console.log ("coroa",coroa)

