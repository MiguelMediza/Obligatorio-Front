import React from 'react'
import {useState, useEffect} from 'react'
import {Container, Col, Row} from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAllComments } from '../../data/api';

const Comments = ({place}) => {
    const navigation = useNavigate();
    const [comments, setComments] = useState([])


    useState(() => {
        const fetchReviews = async () => {
            const response = await getAllComments()
            setComments(response.data)
        }
        fetchReviews().then()
    }, [])


    const commentsDelLugar = comments.filter((comment) => comment.placeId === place.id);
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
            <Row xs={1} md={3} className="g-4">
            {commentsDelLugar && commentsDelLugar.length > 0 ? 
            (
                <div>
                    <h1>Comments</h1>
                    {
                        commentsDelLugar.map((comment) =>(
                            <>
                            
                            <Col key={comment.id} className='text-center' >
                            <Card className='mb-2'>
                                <Card.Body>
                                    <Card.Title>{comment.comment}</Card.Title>
                                </Card.Body>
                                <Card.Text>
                                        Usuario: {comment.userId} 
                                    </Card.Text>
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

export default Comments