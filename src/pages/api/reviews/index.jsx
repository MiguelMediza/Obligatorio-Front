import React from 'react'
import {useState, useEffect} from 'react'
import {Container, Col, Row} from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {getAllReviews} from "../../../data/api"

const ReviewsApi = ({place}) => {
    const navigation = useNavigate();
    const [reviews, setReviews] = useState([])


    useState(() => {
        const fetchReviews = async () => {
            const response = await getAllReviews()
            setReviews(response.data)
        }
        fetchReviews().then()
    }, [])


    const reviewsDelLugar = reviews.filter((review) => review.placeId === place.id);
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
            {reviewsDelLugar && reviewsDelLugar.length > 0 ? 
            (
                <div>
                    <h1>Reviews</h1>
                    {
                        reviewsDelLugar.map((review) =>(
                            <>
                            
                            <Col key={review.id} >
                            <Card className='mb-2'>
                                <Card.Body>
                                    <Card.Title>{review.review}</Card.Title>
                                    <Card.Text>
                                        Calificación: {review.rating} Stars
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

export default ReviewsApi