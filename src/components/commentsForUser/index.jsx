import React from 'react'
import {useState, useEffect} from 'react'
import {Container, Col, Row} from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getCommentsForUser } from '../../data/api'
const CommentsForUser = () => {
    const navigation = useNavigate();
    const [comments, setComments] = useState([])
    const tokenString = localStorage.getItem('user-info');
    const userToken = JSON.parse(tokenString);

    useState(() => {
        const fetchComments = async () => {
            const response = await getCommentsForUser(userToken.id)
            setComments(response.data)
        }
        fetchComments().then()
    }, [])

    const handleClick = (event, id) => {
        event.preventDefault();
        // TODO redirigir a la página de detalle
        navigation(`/details/${id}`);
    }

    const commentsForUser = comments.filter((comment) => comment.userId === userToken.id);
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
            {commentsForUser && commentsForUser.length > 0 ? 
            (
                <div>
                    <h1>Comments</h1>
                    {
                        commentsForUser.map((comment) =>(
                            <>
                            
                            <Col key={comment.id} >
                            <Card className='mb-2' /**onClick={(event) => handleClick(event, comment.placeId)} TIRA ERROR porque al guardar el comentareio, no se guarda el placeid*/>
                                <Card.Body>
                                    <Card.Title>{comment.comment}</Card.Title>
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

export default CommentsForUser