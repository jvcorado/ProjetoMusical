const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');

app.use (bodyParser.json());
app.use(cors({origin: "*"}));
app.use(express.json());

contador = 0;


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

app.get('/favoritos', async (req,res) =>{
    //const id = req.params.id;
    //res.send(await apiDataFavoritos(id))
    res.send(favoritos)
})

app.put('/favoritos', async (req,res) =>{
    contador++
    const { musica } = req.body;
    favoritos[contador] = {
        contador, musica
    };
    await axios.post("https://localhost:10000/eventos", {
        type: "favoritos",
        dados:{
            contador,
            musica,
        },
    })
    res.status(201).send(favoritos[contador])
})

app.post("/eventos", (req, res) => {
    console.log(req.body);
    res.status(200).send({ msg: "ok" });
});

module.exports = {
    apiDataFavoritos,
 };

app.listen(4000, ()=>{
    console.log("Favoritos. Porta 4000")
})
