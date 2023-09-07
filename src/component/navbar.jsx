//para el navbar 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//para los iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ImgLogo from '../img/logo.png';
//para las rutas
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
//vistas
import Catalogo from '../view/catalogo';
import Acerca from '../view/acercaDe';
import RegistroLogin from '../view/registroLogin';
import InicioLogin from '../view/login';
import Publicaciones from '../view/pulicacion';
//componentes
import Overlays from '../component/Overlays';
import { useState } from 'react';


function CollapsibleExample() {
    const [titulo, setTitulo] = useState("");
    //setTitulo("Home");

    const asignarTitulo = (option) =>{
        console.log(option.value);
    }

    return (
        <>
            <BrowserRouter>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Inmobidik</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Item onClick={asignarTitulo({ value:"Home" })} ><Link to='/' className='nav-link' >Home</Link></Nav.Item>
                                <Nav.Item><Link to='/acerca' className='nav-link' onClick={asignarTitulo({ value:"Acerca" })}>Acerca</Link></Nav.Item>
                            </Nav>
                            <Nav>
                                <NavDropdown 
                                    title="Publicaciones"
                                    data-bs-theme="dark" 
                                    id="dropdown-button-dark-example1"
                                >               
                                    <NavDropdown.Item><Link to='/' className='nav-link'>Mis publicaciones</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to='/prueba' className='nav-link'>En venta</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link to='/publicacionesAlquiler' className='nav-link'>En alquiler</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to='/' className='nav-link'>Manual</Link></NavDropdown.Item>
                                   
                                </NavDropdown>
                                <Nav.Item>
                                    <Overlays icono={<FontAwesomeIcon icon={faUser} />} />
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {/*rutas*/}
                <Routes>
                    <Route path='/' element={<Catalogo />} />
                    <Route path='/acerca' element={<Acerca />} />
                    <Route path='/publicacionesAlquiler' element={<Publicaciones />} />
                    <Route path='/inicioLogin' element={<InicioLogin />} />
                    <Route path='/registroLogin' element={<RegistroLogin />} />
                    <Route path='/prueba' element={this} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default CollapsibleExample;