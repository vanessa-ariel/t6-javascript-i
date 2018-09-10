// Duas condicionais são equivalentes
// quando, dado um mesmo input, devolvem
// o mesmo output. Qual das próximas
// condicionais são equivalentes? Porque?
const rand = Math.floor(Math.random() * 21) - 10

/* 	Example using rand = 1
		A -> O valor é positivo: 1!
		B -> O valor é positivo: 1! && O valor é zero!
		C -> O valor é positivo: 1!

	Example using rand = 0
		A -> O valor é zero!
		B -> O valor é zero!
		C -> O valor é zero!

	Example using rand = -1
		A -> O valor é negativo: -1!
		B -> O valor é negativo: -1!
		C -> O valor é negativo: -1!
*/
// A
if (rand > 0) {
	console.log(`O valor é positivo: ${rand}!`)
} else {
	if (rand < 0) {
		console.log(`O valor é negativo: ${rand}!`)
	} else {
		console.log(`O valor é zero!`)
	}
}

// B
if (rand > 0) {
	console.log(`O valor é positivo: ${rand}!`)
}
if (rand < 0) {
	console.log(`O valor é negativo: ${rand}!`)
} else {
	console.log(`O valor é zero!`)
}

// C
if (rand > 0) {
	console.log(`O valor é positivo: ${rand}!`)
}
if (rand < 0) {
	console.log(`O valor é negativo: ${rand}!`)
}
if (rand === 0) {
	console.log(`O valor é zero!`)
}