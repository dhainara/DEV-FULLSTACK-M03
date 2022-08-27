import crypto from "crypto" //universal unity user identification
import animes from "../mocks/animes.js"
class AnimeEntity {
    //dados que serao recebidos do anime
    constructor(anime) {
        this.id = anime.id ||crypto.randomUUID(), //caso o anime nao tenha um id já definido, o crypto irá criar um id random para o character.
        this.title = anime.title,
        this.protagonist = anime.protagonist
        this.genre = anime.genre,
        this.seasons = anime.seasons,
        this.year = anime.year
    }

    //valida personagem
    //throw quebra propositalmente a aplicação caso nao receber o valor desejado
    validateAnime() { 
        if (!this.title || this.title.lenght >= 3) {
            throw new Error('Insira um nome válido! \n É necessario que ele tenha no minimo três caracteres.') 
        }
        if (!this.protagonist || this.protagonist.lenght < 0) {
            throw new Error('Insira ao menos protagonista!') 
        }
        if (!this.genre || this.genre.lenght > 3) {
            throw new Error('Insira um genero válido! \n É necessario que ele tenha no minimo três caracteres.') 
        }
        if (this.seasons == "0" || this.seasons == 0) {
            this.seasons = "Filme"
        } else if (!this.seasons) {
            throw new Error('Insira a quantidade de temporadas do anime! Caso seja um filme, digite zero') 
        }

        if (!this.year || this.year < 1500) {
            throw new Error('Insira um ano valido!') 
        }

    }
    //apos a validação,aaplicação irá retornar os valores do personagem
    getAnime() {
        return {
            id: this.id,
            protagonist: this.protagonist,
            genre: this.genre,
            seasons: this.seasons,
            year: this.year,
            characters: this.characters,
        }
    }
}

export default AnimeEntity