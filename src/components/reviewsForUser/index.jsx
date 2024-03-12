import React from 'react'
import {useState, useEffect} from 'react'
import {Container, Col, Row} from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getReviewsForUser } from '../../data/api'
const ReviewsForUser = () => {
    const navigation = useNavigate();
    const [reviews, setReviews] = useState([])
    const tokenString = localStorage.getItem('user-info');
    const userToken = JSON.parse(tokenString);

    useState(() => {
        const fetchComments = async () => {
            const response = await getReviewsForUser(userToken.id)
            setReviews(response.data)
        }
        fetchComments().then()
    }, [])

    const handleClick = (event, id) => {
        event.preventDefault();
        // TODO redirigir a la página de detalle
        navigation(`/details/${id}`);
    }

    const reviewsForUser = reviews.filter((review) => review.userId === userToken.id);
    //Realizar con un click enviar al perfil del que hizo el comentario
    // const handleClick = (e, placeId, eventId) => {
    //     e.preventDefault();
    //     navigation(
    //         `/details/${placeId}/event/${eventId}` , {
    //             state: {events: events}
    //         }
    //     )
    // }
    return (
        <div className="m-5">
            <Container>
            <Row xs={1} md={2} className="g-4">
            {reviewsForUser && reviewsForUser.length > 0 ? 
            (
                <div>
                    <h1>Reviews creadas</h1>
                    {
                        reviewsForUser.map((review) =>(
                            <>
                            
                            <Col key={review.id} >
                            <Card className='mb-2' onClick={(event) => handleClick(event, review.placeId)} >
                                <Card.Body>
                                    <Card.Title>{review.review}</Card.Title>
                                    <Card.Text>
                                        Rating: {review.rating} 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                            </>

                        ))
                    }
                </div>
            )
             :
            (
            <>
            </>
            )}
                </Row>
            </Container>
        </div>
    )
}

export default ReviewsForUser