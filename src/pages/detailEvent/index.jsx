import React from "react";
import { Card } from "react-bootstrap";
import {Container, Row, Col} from "react-bootstrap"
import { useParams } from "react-router-dom";

const DetailEvent = ({place}) => {
    const {id, ide} = useParams();
    // TODO VER DE COMO MEJORAR ESTA LOGICA.
    // primero -> Filtrar los elementos utilizando los parametros que vienen en la url
    const placeFiltered = places.filter((place) => place && place.events)
    const events = placeFiltered && placeFiltered[0].events.filter(event => event.id === parseInt(ide) && event.placeId === parseInt(id)) || []
    
    return (
        <div className="m-5">
            <Container>
                <Row>
                    <Col>
                    {events.map((event) => {
                        return (
                            <>
                                <Card>
                                    <Card.Img variant="top" src={event.image} width={300} height={300}/>
                                    <Card.Body>
                                        <Card.ImgOverlay>
                                            <Card.Title>{event.className}</Card.Title>
                                            <Card.Text>{event.location}</Card.Text>
                                        </Card.ImgOverlay>
                                        <Card.Text>{event.description}</Card.Text>
                                        <Card.Text>{event.date}</Card.Text>
                                    </Card.Body>
                                </Card>
                                <h3>
                                    Comments
                                </h3>
                                {event.comments.length === 0 ? (
                                    <p>No Comments yet.</p>
                                ): (
                                    <ul>
                                        {event.comments.map((comment, index) => (
                                            <li key={index}>
                                                {comment.text} - <a href={`/profile/${comment.userId}`}>{comment.username}</a>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <h3>
                                    Reviews
                                </h3>
                                {event.reviews.length === 0 ? (
                                    <p>No Reviews yet.</p>
                                ): (
                                    <ul>
                                        {event.reviews.map((review, index) => (
                                            <li key={index}>
                                                {review.rating} stars - <a href={`/profile/${review.userId}`}>{review.username}</a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        )
                    })}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetailEvent;