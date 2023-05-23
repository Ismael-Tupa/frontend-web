//para el navbar 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//para los iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
//para las rutas
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
//vistas
import Home from '../view/home';
import Acerca from '../view/acercaDe';
import RegistroLogin from '../view/registroLogin';
import InicioLogin from '../view/login';
//componentes
import Overlays from '../component/Overlays';


function CollapsibleExample() {
    return (
        <>
            <BrowserRouter>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Inmobidik</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            <Nav.Item><Link to='/' className='nav-link'>Home</Link></Nav.Item>
                                <Nav.Item><Link to='/acerca' className='nav-link'>Acerca</Link></Nav.Item>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets" >Contacto</Nav.Link>
                                <Nav.Item>
                                    <Overlays icono={<FontAwesomeIcon icon={faUser}/>} />
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {/*rutas*/} 
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/acerca' element={<Acerca />} />
                    <Route path='/inicioLogin' element={<InicioLogin />} />
                    <Route path='/registroLogin' element={<RegistroLogin />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default CollapsibleExample;