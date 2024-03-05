import React from "react";
import { Card } from "react-bootstrap";
import {Container, Row, Col} from "react-bootstrap"
import { useParams } from "react-router-dom";
import Events from "../events";

const Details = ({places}) => {
    const {id} = useParams();
    const place = places.find((place) => place.id === parseInt(id))
    return (
        <div className="m-5">
            <h2>Details</h2>
            <Container>
                <Row>
                    <Col>
                            <Card>
                                <Card.Img variant="top" src={place.image} width={300} height={300} />
                                <Card.Body>
                                    <Card.ImgOverlay>
                                        <Card.Title>{place.name}</Card.Title>
                                        <Card.Text>
                                            {place.location}
                                        </Card.Text>
                                    </Card.ImgOverlay>
                                    <Card.Text>
                                        {place.description}
                                    </Card.Text>
                                    <Card.Text>
                                        {place.date}
                                    </Card.Text>
                                    <Card.Text>
                                        {place.date}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            {place && place.events && (
                                <>
                                    <h2>Events</h2>
                                    <Events events={place.events} />
                                </>
                            )}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Details;