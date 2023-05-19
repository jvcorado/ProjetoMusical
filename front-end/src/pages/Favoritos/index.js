import { Cards } from "../../components/Card"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Form } from 'react-bootstrap'
import { useEffect, useState } from "react";
import { Genero } from "../../api";
import { Cabecalho } from "../../components/Header";


export const Favoritos = () =>{

  const [idMusic, setIdMusic] = useState([])
  const [ cantor , setCantor ] = useState('')

  useEffect(() =>{
    (async () =>{
      const response = await fetch(`http://localhost:4000/favoritos/${cantor}`);
      const data = await response.json();
      console.log(data)
      const favoritoData = data.map((item) => {
        return {
          id: item.id,
          title: item.title,
          preview: item.preview
        };
      });
      setIdMusic(favoritoData);
    })();
   },[cantor])
    
  return(
    <div className="bg-dark w-100">
      <Cabecalho value={cantor} onChange={(e) => setCantor(e.target.value)}/>
      <Row className="gap-5 pt-4 p-0 pd-md-3 p-0 m-0">
          {idMusic.length === 0  &&  <div style={{height:'85.9vh'}} className="pt-5 d-flex flex-column align-items-center text-center text-white"><h1>Bem-vindo à página de Curtidas!</h1><h5>Aqui, você encontrará um universo de músicas que você curtiu.</h5></div>}
          {idMusic.map((generos)=>{
              return(
                <Col sm={12} md={8} lg={6} xl={5} className="m-auto" key={generos.id}>
                  <Cards
                    id={generos.id}
                    img={generos.picture}
                    alt={generos.title}
                    title={generos.title}
                    genero={generos.genero}
                    music={generos.preview}                    
                  />
                </Col>
              )
          })}
      </Row>
    </div>
  );
}



  