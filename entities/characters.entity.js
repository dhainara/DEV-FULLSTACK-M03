import crypto from "crypto" //universal unity user identification

class CharacterEntity {
    //dados que serao recfebidos do character
    constructor(character) {
        this.id = crypto.randomUUID()//caso o personagem nao tenha um id já definido, o crypto irá criar um id random para o character.
        this.name = character.name
        this.age = character.age
    }

    //valida personagem
    //throw quebra propositalmente a aplicação caso nao receber o valor desejado
    validateCharacter() { 
        if (!this.name) {
            throw new Error('Insira um nome válido para o personagem!') 
        }
        if (!this.age) {
            throw new Error('Insira uma idade válida para o personagem! Use apenas números.') 
        } else if (this.age == 0) {
            throw new Error('Idade nao pode ser igual ou menor que zero. Tente novamente.')
        }
    }
    //apos a validação,aaplicação irá retornar o personagem
    getCharacter() {
        return {
            id: this.id,
            name: this.name,
            age: this.age
        }
    }
}

export default CharacterEntity