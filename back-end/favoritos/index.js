const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');

app.use (bodyParser.json());
app.use(cors({origin: "*"}));
app.use(express.json());

const listaFavoritos = []

async function apiDataFavoritos(id){
    try{
       const response = await axios.get(`https://api.deezer.com/search?q=${id}`);
       return response.data;
    }
    catch(error){
       console.log(error)
    }
 }

app.get('/favoritos/:id', async (req,res) =>{
    const id = req.params.id;
    listaFavoritos.push(id);
    res.send(await apiDataFavoritos(id))
    console.log(listaFavoritos)
})

module.exports = {
    apiDataFavoritos,
 };

app.listen(10000, ()=>{
    console.log("Favoritos. Porta 10000")
})