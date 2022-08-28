import { animesService } from "../services/animes.services.js"

function findAllAnimes(req, res) {
    const allAnimes = animesService.findAllAnimes()
    res.send(allAnimes)
}

function findAnimeById(req, res) {
    const id = +req.params.id
    const selectedAnime = animesService.findAnimeById(id)
    res.send(selectedAnime)
}

function createAnime(req, res) {
    const anime = req.body
    const createeAnime = animesService.createAnime(anime)
    res.send(createeAnime)
}

function updateAnime(req, res) {
    const anime = req.body
    const updatedAnime = animesService.updateAnime(anime)
    res.send(updatedAnime)
}

function deleteAnime(req, res) {
    const id = req.params.id
    const deletedAnime = animesService.deleteAnime(id)
    res.send(deletedAnime)
}

export const animesController = {findAllAnimes,
    findAnimeById,
    createAnime,
    updateAnime,
    deleteAnime
}