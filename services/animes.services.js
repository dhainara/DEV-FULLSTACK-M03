import animes from "../mocks/animes.js"
import CharacterEntity from "../entities/characters.entity.js"
import AnimeEntity from "../entities/animes.entity.js"

function findAllAnimes() {
    console.log('findAllAnimes executado.')
    if (animes.length == 0) {
        return ('Não há animes registrados. Vá para http://localhost:3000/create-anime e cadastre um anime agora!')
    } else {
        return animes
    }
}

function findAnimeById(id) {
    console.log('findAnimesById executado.')

    const anime = animes.find((anime) =>anime.id ==id)

    let count = animes.length

    if (anime) { //se o anime com o id escolhido for encontrado
        return anime
    } else {
        return (`Nenhum anime com esse id foi encontrado.\nHá ${count} id's registrados. Verifique a lista e tente novamente com um id existente!`)
    }
}

function createAnime(anime) {
    console.log('createAnime executado.')

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
    console.log('updateAnime executado.')

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
    console.log('deleteAnime executado.')

    const animeIndex = animes.findIndex((element => element.id == id))
    animes.splice(animeIndex, 1)

    if (animeIndex) {
        return ('Anime deletado!')
    }else if (animes.length = true) {
        return ('Não há nenhum anime registrado na lista para ser deletado!')

    }
    
}

export const animesService = {
    findAllAnimes,
    findAnimeById,
    createAnime,
    updateAnime,
    deleteAnime
}