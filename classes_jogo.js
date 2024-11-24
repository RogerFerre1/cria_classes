class character{
    constructor(nome, idade, tipo){
        this.nome = nome 
        this.idade = idade 
        this.tipo = tipo 
    }

    atacar(){
        let ataque = ' '
        if (this.tipo == 'mago'){
            ataque = 'magia'
        } else if(this.tipo == 'guerreiro'){
            ataque = 'espada'
        } else if(this.tipo == 'monge'){
            ataque = 'artes marciais'
        } else{
            ataque = 'shuriken'
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let guerreiro = new character("Rogin", 22, "guerreiro")
console.log(guerreiro)
guerreiro.atacar()

let mago = new character('Mago Medonho',  23, 'mago')
console.log(mago)
mago.atacar()

let monge = new character('Dalai Lama',  89, 'monge')
console.log(monge)
monge.atacar()

let ninja = new character('Naruto',  30, 'ninja')
console.log(ninja)
ninja.atacar()

