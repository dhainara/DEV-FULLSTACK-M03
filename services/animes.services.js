import animes from "../mocks/animes.js"
import CharacterEntity from "../entities/characters.entity.js"
import AnimeEntity from "../entities/animes.entity.js"

function findAllAnimes() {
    return animes
}

function findAnimeById(id) {
    let idAnime
    let chosenAnime
    animes.map((anime) => {
        if (anime.id === idAnime){
        chosenAnime = anime
        }
    })

    let count = animes.length

    if (chosenAnime) { //se o anime com o id escolhido for encontrado
        return chosenAnime
    } else {
        return (`Nenhum anime com esse id foi encontrado.\nHá ${count} id's registrados.\n Verifique a lista e e tente novamente com um id existente!`)
    }
}

function createAnime(anime) {
    console.log(anime)
    const newAnime = new AnimeEntity(anime)
    newAnime.validateAnime()
    //validação de character caso ele exista
    
    let newCharacters = []

    anime.characters.map((character) => {
        const newCharacter = new CharacterEntity(character)
        newCharacter.validateCharacter()
        newCharacters.push(newCharacter.getCharacter())
    })     

    const createdAnime = {
        ...newAnime.getAnime(),
        charecters: newCharacters,
    }

    animes.push(createdAnime)

    return createdAnime
}

function updateAnime(anime) {
    const updateAnime = new AnimeEntity(anime)
    updateAnime.validateAnime()

    const updatedCharacters = []
    anime.characters.map((character) => {
        const updatedCharacter = new CharacterEntity(character)
        updatedCharacter.validateCharacter()
        updatedCharacters.push(updatedCharacter.getCharacter())
    })  

    const updatedAnime = {
        ...updateAnime.getAnime(),
        characters: updatedCharacters
    }

    animes.map((eachAnime, index) => {
        if (eachAnime.id === updateAnime.id) {
            animes.splice(index, 1, updateAnime)//irá remover o objeto index daarray anime, e recolor os dados do updated anime
        }
    })

    return updatedAnime

}

function deleteAnime(id) {
    const animeIndex = animes.findIndex((element => element.id == id))
    animes.splice(animeIndex, 1)
}

export const animesService = {
    findAllAnimes,
    findAnimeById,
    createAnime,
    updateAnime,
    deleteAnime
}