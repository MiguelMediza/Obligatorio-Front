import { useEffect, useState } from "react";
import {Container, Navbar, Nav, Button} from "react-bootstrap";
import { useNavigate} from "react-router-dom";

// Recibir propiedades para saber si un usuario esta logueado,
// asi como que funcion ejecutar al momento de desloquear
const Header = ({isLoggedIn, logout}) => {
    const navigation = useNavigate();
    const handleLogout = () => {
        logout();
        navigation('/')
    }
    const tokenString = localStorage.getItem('user-info');
    const userToken = JSON.parse(tokenString);
    if(userToken != null){
        isLoggedIn= true
    };

    function logout(){
        localStorage.removeItem("user-info");
        navigation('/')
    }
    return(
        <div>
            <Navbar bg="light" expand="lg" className="text-white">
                    <Container>
                        <Navbar.Brand href="/"><a href="/"><img src="src\images\icon.png" width={50} className="logo" alt=""/></a>History Hunters</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse id="basic=navbar=nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/places">Lugares</Nav.Link>
                                <Nav.Link href="/events">Events</Nav.Link>
                                <Nav.Link href="/">Objetos</Nav.Link>
                            </Nav>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {/* mostrar informacion si el usuario no esta logueado, pagina de login, registro */}
                                {!isLoggedIn && (
                                    <>
                                        <Nav.Link href="/login">Login</Nav.Link>
                                        <Nav.Link href="/register">Register</Nav.Link>
                                    </>
                                )}

                                {isLoggedIn &&(
                                        <>
                                            <Nav.Link href="/#">{userToken.name}</Nav.Link>
                                            <Nav.Link href="/profile">Profile</Nav.Link>
                                            <Button variant="outline-primary" onClick={handleLogout}>
                                                Logout
                                            </Button>
                                        </>
                                    )
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>
        </div>
    )
}

export default Header;