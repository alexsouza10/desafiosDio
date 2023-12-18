class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque indefinido";
        }

        const mensagem = `O ${this.tipo} ${this.nome} atacou usando ${ataque}.`;
        return mensagem;
    }
}

// Exemplo de uso:
const heroi1 = new Heroi("Gandalf", 150, "mago");
const heroi2 = new Heroi("Aragorn", 35, "guerreiro");
const heroi3 = new Heroi("Bruce Lee", 40, "monge");
const heroi4 = new Heroi("Hanzo", 30, "ninja");

console.log(heroi1.atacar());  // Saída: O mago Gandalf atacou usando magia.
console.log(heroi2.atacar());  // Saída: O guerreiro Aragorn atacou usando espada.
console.log(heroi3.atacar());  // Saída: O monge Bruce Lee atacou usando artes marciais.
console.log(heroi4.atacar());  // Saída: O ninja Hanzo atacou usando shuriken.
