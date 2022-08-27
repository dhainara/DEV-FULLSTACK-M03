//routers armazena os caminhos que serão feitos na aplicação.

import {Router} from "express"
import { animesController } from "../controllers/animes.controllers.js"

const animesRouter = Router()

animesRouter.get('/all-animes', animesController.findAllAnimes)
animesRouter.get('/animeById/:id', animesController.findAnimeById)
animesRouter.post('/create-anime', animesController.createAnime)
animesRouter.put('/update-anime/:id', animesController.updateAnime)
animesRouter.delete('/delete/:id', animesController.deleteAnime)

export default animesRouter