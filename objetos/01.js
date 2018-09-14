// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon

const pokemon = {
    name : "Minccino",
    japaneseName : "Chillarmy",
    origin : "Egg",
    animal : "Chichilla",
    trait : "Clean freak",
    color : "White"
}

// 2.
// Printe no console a seguinte
// frase: "Hello, my name is < >.
// And my name in Japanese is < >."

pokemon.diga_ola = function () {
	console.log (`Hello, my name is ${this.name}. And my name in Japanese is ${this.japaneseName}.`) //using this because pokemon could be used for several pokemons using the same object name
}

// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `can_fly` 
// (ou algo do tipo) e defina
// ela como `true` ou `false`.

pokemon.canFly = true

// 4.
// Adicione um método ao seu pokemon
// chamado `fly` que retorna "Sorry,
// I can't fly" ou "Flyyyyiinnngggg!".


pokemon.fly = function () {
    //if (this.canFly === true){ 
    if (this.canFly) // it's not necessary to add === because if onlu=y return if the value is true
        return "Flyyyyiinnngggg!"
    } else {
        return "Sorry, I can't fly"
    }  
}



// 5.
// Adicione um método chamado
// `do_something` ao seu pokemon
// que retorna randomicamente uma 
// das Strings "FIGHT", "BAG" ou "RUN".

pokemon.do_something = function (){
    const action = Math.floor(Math.random() * 3)
        if (action === 0){
            return "FIGHT"
        }else if (action === 1){
            return "BAG"    
        }else {
            return "RUN"
        }
}
// or...
pokemon.do_something = function (){
    let action = ["FIGHT", "BAG","RUN"]
        return action[Math.floor(Math.random() * action.length)] // using action.length instead of number of actions because I can always add more elements to my array

// 6.
// Adicione um método chamado
// `ask` ao seu pokemon que printa
// no console "What will < > do?" e
// retorna o resultado do metodo
// `do_something`.

pokemon.ask = function (){
    console.log(`What will ${this.name} do?`)
    return this.do_something()
}


// 7. 
// Printe todas as propriedades 
// do seu pokemon no console.
for (const prop in pokemon){
    console.log (prop)
}

// 8. 
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor>

for(const prop in pokemon){
    console.log(`${prop} : ${pokemon[prop]}`)
}

// 9.
// Crie uma funcao construtora
// de um pokemon generico.
// function (nome, nome_japones) {}
function Pokemon(nome, nome_japones, pode_voar) {
	this.nome = nome
	this.nome_japones = nome_japones
	this.pode_voar = pode_voar
	this.diga_ola = function () {
		console.log(`Hello, my name is ${this.nome}. And my name in Japanese is ${this.nome_japones}.`)
	}
	this.voe = function () {
		if (this.pode_voar) {
			return "É nóis que voa bruxão!"
		} else {
			return "I believe I can fly, but I can't..."
		}
	}
	this.manda_ver = function () {
		let acoes = [
			"Desce a porrada", 
			"Deu ruim", 
			"Ash, vambora daqui"
		]
		return acoes[Math.floor(Math.random() * acoes.length)]
	}
	this.pergunte = function () {
		console.log(`O que ${this.nome} vai fazer?`)
		return this.manda_ver()
	}
}
