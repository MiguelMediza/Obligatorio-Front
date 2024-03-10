import React from 'react'
import { useState, useEffect } from "react";
import {Container, Col, Row, Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// importar la funcion que se encarga de traer todo los founds
import { getAllFounds } from '../../data/api';

const FoundsForPlace = ({place}) => {
    const navigation = useNavigate();
    const [Founds, setFounds] = useState([])

    const FoundsPlace = Founds.filter((found) => found.placeId === place.id);
    useState(() => {
        const fetchReviews = async () => {
            const response = await getAllFounds()
            setFounds(response.data)
        }
        fetchReviews().then()
    }, [])
    

    const handleClick = (event, id) => {
        event.preventDefault();
        // TODO redirigir a la página de detalle
        navigation(`/detailsFound/${id}`);
    }

        return (

            <div className="m-5">
                <Container>
                    <h1 className='text-center'>Objetos encontrados en este lugar</h1>
                    {/* TODO crear comoponente busqueda y agregarlo */}
                    <Row xs={1} md={2} className="g-4">
                        {FoundsPlace.map((found) => <Col key={found.id}>
                            <Card onClick={(event) => handleClick(event, found.id)}>
                                <Card.Img variant="top" src={found.images[0].url} />
                                <Card.Body>
                                    <Card.Title>{found.name}</Card.Title>
                                    <Card.Text>
                                        {found.description}
                                    </Card.Text>

                                    <Card.Text>
                                        Type: {found.type}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        )}
                    </Row>
                </Container>
            </div>
        );
}

export default FoundsForPlace