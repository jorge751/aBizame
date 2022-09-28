
//
//	Navegación de bootstrap
//

//	Framework !!!
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//	Propio !!!
import logo from './../../assets/img/logo.png';
import { WidgetSesion } from '../index';

//	Bootstrap !!!
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

//	CSS !!!
import './index.css'

//	Default !!!
export default function NavBar() {

	//	Navegador para moverse
	const navegar = useNavigate();
	
	//	Botón buscar mensaje
	const buscarMensaje = (evt) => {
		evt.preventDefault();
		navegar(`/todas/${evt.target.buscar.value}`);
	};

	//	Render !!!
	return (
        <Navbar id='header' expand='lg'>
            <Container fluid className='sombra'>

                <Navbar.Brand href='/' className='px-3'>
                    <img src={logo} width='150px' alt={'xxx'} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='navbarScroll' />

                <Navbar.Collapse id='navbarScroll'>

                    <Nav
                        className='me-auto my-2 my-lg-0 nav-max-height'
                        navbarScroll
                    >
                        <Nav.Link href='/todas'>Todas</Nav.Link>
                        <Nav.Link href={'/categoria/'}>Lager</Nav.Link>
                        <Nav.Link href={'/categoria/'}>Negras</Nav.Link>
                        <Nav.Link href={'/categoria/'}>Pale Ale</Nav.Link>
                        <Form
                            className='d-flex'
                            onSubmit={buscarMensaje}
                            autoComplete='off'
                        >
                            <Form.Control
                                name='buscar'
                                type='search'
                                placeholder='Buscar por nombre'
                                className='me-2'
                                aria-label='Search'
                            />
                                <Button
                                    variant='outline-success'
                                    type='submit'
                                >
                                    Buscar
                                </Button>
                        </Form>
                    </Nav>

                    <Nav className='px-3'>
                        <WidgetSesion/>
                    </Nav>

                    <Nav>
                        <NavDropdown
                            title='Administración'
                            id='navbarScrollingDropdown'
                        >
                            <NavDropdown.Item href='/admin_message_list'>
                                Mensajes
                            </NavDropdown.Item>
                            <NavDropdown.Item href='/admin_order_list'>
                                Pedidos
                            </NavDropdown.Item>
                            <NavDropdown.Item href='/admin_order_list'>
                                Pedidos
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='/admin_user_list'>
                                Usuarios
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
	);

};
