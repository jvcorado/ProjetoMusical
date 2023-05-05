import { Cards } from "../../components/Card"
import Hino from "../../assets/img/download.jpg"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap'

export const Home = () =>{
  return(
    <Container fluid>
      <Row className="gap-5 p-3 p-0 m-0">
        <Col className="">
          <Cards 
            img={Hino}
            alt={'Hino dos Mlks'}
            title={'Hino dos Mlks'}
            cantores={'Bin, Mc Daniel'}
          />
        </Col>
        <Col className="">
          <Cards 
            img={Hino}
            alt={'Hino dos Mlks'}
            title={'Hino dos Mlks'}
            cantores={'Bin, Mc Daniel'}
          />
        </Col>
        <Col className="">
          <Cards 
            img={Hino}
            alt={'Hino dos Mlks'}
            title={'Hino dos Mlks'}
            cantores={'Bin, Mc Daniel'}
          />
        </Col>
      </Row>
    </Container>
  )
}