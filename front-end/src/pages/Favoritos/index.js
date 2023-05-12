import { useEffect, useState } from "react"
import { Cards } from "../../components/Card"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Favoritos = () =>{

  const [idMusic, setIdMusic] = useState([])

   useEffect(() =>{
    (async () =>{
      const response = await fetch(`https://localhost:6000/favoritos/${idMusic}`);
      const data = await response.json();
      console.log(data)
      const favoritoData = data.data.map((item) => {
        return {
          id: item.id,
          picture: item.album.cover_medium,
          title: item.title,
          genero: item.genre_id,
          preview: item.preview
        };
      });
      setIdMusic(favoritoData);
    })();
   })
    
  return (
    <div>
         {idMusic.length === 0  && <span>Carregando ...</span>}
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
    </div>
  );
}



  