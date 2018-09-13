//EXERCISE 1

// hello("what") -> "Hello, world!"
// hello() -> "Hello, world!"

function hello() {
	return "Hello, world!"
}

//EXERCISE 2

function show(x) {
	console.log(`${x} ${x * x}`)
	return x * x
	console.log(`${x} ${x * x * x}`)
	return x * x * x
}

// show(4) ->  
// console.log -> 4 16
// return -> 16
// js does not execute second console.log and second return


// show(-4) -> 
// console.log -> -4 16
// return -> 16


//EXERCISE 3

function eq3(a, b, c) {
	console.log(a, b, c)
	if (a === b && a === c) {
		return 1
	} else {
		return 0
	}
}

// eq3() -> 1 undefined === undefined

// eq3(1, 2, 3) -> 0

// eq3("1", 1, 3) -> 0

// eq3("!", "a", "b") -> 0

// eq3("!", "!", !) -> Uncaught sintax error  ! needs a value after it because it's an operator


//EXERCISE 4

// Result:
function sum(x) {
	return x + 2
}

//sum (0) -> 2
//sum (0) -> 2

const x = 5
console.log(`${sum(x + 2)}, ${sum(sum(x + 2))}`)
// ---------- X IN THE ARGUMENT IS NOT THE SAME AS X IN THE FUNCTION ----------
//console.log ->            
//sum (7)                      
//return 7+2                   
//9                           
                                
//sum(sum(7))
//sum(9)
//return 9+2
//11

//console.log -> 9, 11


//EXERCISE 5
// Result: 
function confusion(a, b) {
	a = 2 * a + b
	return a
}
let x = 2
let y = 5
// confusion(5, 2)
// x = 2 * 5 + 2 
// x = 12
y = confusion(y, x) // 12
// confusion(12, 2)
// x = 2 * 12 + 2
// x = 26
x = confusion(y, x) // 26
console.log(`${x}, ${y}`)

//console.log -> 26, 12

/*
function confusion(x, y) { //                             x=2 y=5
	x = 2 * x + y // these are the function arguments     x=2*2+5
	return x // returns the function argument             x=9
}

let a = 2 // this is a variable 
let b = 5 // this is avariable

y = confusion(b, a) // y=5 x=2
// y = confusion(5,2) 
// y = (x= 2*x + y)
// y = (x= 2*5 + 2)
// y = (x= 12)
// y = 12

x = confusion(y, x) // y=12 x=2
// y = confusion(12,2)
// y = (x= 2*x + y)
// y = (x= 2*2 +12)
// y = (x= 16)
console.log(`${x}, ${y}`)*/
