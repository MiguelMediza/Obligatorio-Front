import React from "react";
import Header from "./header";
import Footer from "./footer";
// importar componentes de boostrap
import {Container, Row, Col} from "react-bootstrap";

const Layout = ({children, isLoguedIn, logout}) => {
    return (
    <div className="app">
        <Header isLoguedIn={isLoguedIn} logout={logout}/>
        <main>
            <Container>
                <Row className="no-padding">
                    <Col>
                        {children}
                    </Col>
                </Row>
            </Container>
        </main>
        <Footer />
    </div>
    );
}
    
export default Layout;