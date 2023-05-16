import { useEffect, useState } from "react"
import { Cards } from "../../components/Card"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Favoritos = () =>{

  const [idMusic, setIdMusic] = useState([])
  const [ cantor , setCantor ] = useState('')


  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:4000/favoritos/${cantor}`);
      const data = await response.json();
      console.log(data);
      const favoritoData = data.map((item) => {
        return {
          id: item.id,
          title: item.title,
          preview: item.preview
        };
      });
      setIdMusic(favoritoData);
    })();
  }, [cantor]);
  


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
    
  return (
    <div>
         {idMusic.length === 0  && <span>Tela de favoritos</span>}
         <input type="text" placeholder="digite" value={cantor} onChange={(e)=> setCantor(e.target.value)} />
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



  