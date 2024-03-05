import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const Footer = () => {
    return(
        <footer className="bg-dark text-white text-center py-3">
            <Container>
                <Row>
                    <Col lg={12}>
                        <p className="mb-0"> &copy; 2024 CTC. All Righst Reserverd</p>
                    </Col>
                </Row>
            </Container>
        </footer>   
    )
}

export default Footer;