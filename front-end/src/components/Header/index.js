import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../assets/img/romantify-logo.png'
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

export const Cabecalho = ({value,onChange}) => {
  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="sticky-top w-100 ps-lg-5 pe-lg-5" style={{backgroundColor:'#141414'}}>
          <Container fluid>
            <Navbar.Brand href="/"><img src={Logo} alt="Romantify" className='w-75'/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end items-center  flex-grow-1 pe-3">
                  <Nav.Link href="/" className='text-white  d-flex flex-column align-items-center'><BiHomeAlt2 size={35}/>Inicio</Nav.Link>
                  <Nav.Link href="/favoritos" className='text-white d-flex flex-column align-items-center '><AiOutlineHeart size={35}/>Curtidas</Nav.Link>
                </Nav>
                <Form className="d-flex w-25">
                  <Form.Control
                    type="search"
                    placeholder="Explorar"
                    className="me-2 mt-1 bg-light rounded-5 h-75"
                    aria-label="Search"
                    value={value}
                    onChange={onChange}
                    
                  />
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
