import express from "express"
import cors from "cors"
import animes from "./mocks/animes.js"
import animesRouter from "./routers/animes.routers.js"
import CharacterEntity from "./entities/characters.entity.js"
import AnimeEntity from "./entities/animes.entity.js"

const port = 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use('/animes', animesRouter)


app.get('/', function (req, res) {
    res.send('Bem vindo a API de Animes!\n \nAqui você poderá ver todos os seus animes de uma só vez, ver um anime especifico existente na lista, excluir um anime, modificar um de seus dados, adicionar e/ou excluir um anime.')
})

app.get('/testes', function (req, res) {
    //dando os valores para o character
    const anime = new AnimeEntity({
        id: 5,
        title: "Back",
        protagonist: "this.protagonist",
        genre: "this.genre",
        seasons: "0",
        year: "2000",
        characters: {}
    })
    
    //validando
    anime.validate()

    //getCharacter está retornando o os dados

    res.send(anime.getAnime())
})

app.listen(port, () => {
    console.log('A aplicação está rodando perfeitamente!');
    console.log(`Acesse em: http://localhost:${port}`);
});