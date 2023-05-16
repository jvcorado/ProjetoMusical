const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');
const { v4: uuidv4} = require("uuid")

app.use (bodyParser.json());
app.use(cors({origin: "*"}));
app.use(express.json());

contador = 0;
const curtidasPorFavoritosID = {}

const favoritos = {}

async function apiDataFavoritos(id){
    try{
       const response = await axios.get(`https://api.deezer.com/track/${id}`);
       return response.data;
    }
    catch(error){
       console.log(error)
    }
 }

app.get('/favoritos/:id/curtidas', async (req,res) =>{
    //const id = req.params.id;
    //res.send(await apiDataFavoritos(id))
    res.send(curtidasPorFavoritosID)
})

app.put('/favoritos/:id/curtidas', async (req,res) =>{
    const idCurtidas = uuidv4();
    const { musica } = req.body;
    const curtidasDoFavoritos = curtidasPorFavoritosID[req.params.id] || [];
    curtidasDoFavoritos.push({ id: idCurtidas, musica });
    curtidasPorFavoritosID[req.params.id] = curtidasDoFavoritos;
    await axios.post("https://localhost:10000/eventos", {
        type: "CurtidasCriadas",
        dados:{
            id: idCurtidas, musica, favoritosId: req.params.id
        },
    })
    res.status(201).send(curtidasDoFavoritos)
})

app.post("/eventos", (req, res) => {
    console.log(req.body);
    res.status(200).send({ msg: "ok" });
});

module.exports = {
    apiDataFavoritos,
 };

app.listen(5000, ()=>{
    console.log("Favoritos. Porta 5000")
})
