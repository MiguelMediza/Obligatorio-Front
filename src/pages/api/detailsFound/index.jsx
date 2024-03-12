import { useState, useEffect } from "react";
import {Container, Col, Row, Card, InputGroup, Form, Button} from "react-bootstrap";
// importar la funcion que se encarga de traer todo los founds
import {getFoundById} from "../../../data/api"
import { useParams } from 'react-router-dom';
import ReviewsApi from "../../../components/reviews";    

const DetailsFound = ({isLoggedIn}) => {
    const { id } = useParams();
    const [found, setFound] = useState([]);
    const tokenString = localStorage.getItem('user-info');
    const userToken = JSON.parse(tokenString);
    const [review, setReview] = useState({
        review: "",
        rating: "",
        placeId: 0,
        userId: userToken.id,
        foundId: 0
    });
    useEffect(() => {
        const fetchFounds = async () => {
             const response = await getFoundById(id)
             setFound(response.data)
            
        }
        fetchFounds().then()
     }, [])

     if (found.images && found.images[0]) {
        var imageUrl = found.images[0].url;
      }
 
      const addReview = (e) => {
        e.preventDefault()
        const value = e.target.value;
        const element = e.target.id;
        setReview(review.userId = userToken.id)
        setReview(review.placeId = found.placeId)
        setReview(review.foundId = id)
        setReview({...review, [element]: value})
        
    }
    // if(userToken != null){
    //     isLoggedIn= true
    // };
    // console.log(review);
    // async function Comentar(event,review) {
    //     event.preventDefault();
    //     const response = confirm(`Estas seguro que quieres hacer una review?`)
    //     if(response){
    //         let result = await fetch(`https://history-hunters-api.onrender.com/reviews/add`,{
    //             method: 'POST',
    //             body:JSON.stringify(review),
    //             headers:{
    //                 "Content-Type":'application/json',
    //                 "Accept": 'application/json'
    //             }
    //         })
    //         result = await result.json()
            
    //         if(result.status == 201){
    //             alert("Review agregada existosamente")
    //         }
    //         else{
    //             alert("Ocurrio un error al agregar una review")
    //         }
        
    //     }
    
    // } 
     return (
    
        <div className="m-5">
            <Container>
            {/* TODO crear comoponente busqueda y agregarlo */}
            <Row xs={1} md={1} className="g-4">
                
                    <Col >
                        <Card>
                            <Card.Img variant="top" src={imageUrl} />
                            <Card.Body>
                                <Card.Title>{found.name}</Card.Title>
                                <Card.Text>
                                    {found.description}
                                </Card.Text>
                                <Card.Text>
                                   <p className="">Address: {found.region}</p>
                                </Card.Text>
                                <Card.Text>
                                    Calificación: {found.city} Stars
                                </Card.Text>
                                <Card.Text>
                                    <p>Tipo: {found.type} </p>
                                </Card.Text>
                                <Card.Text>
                                    <p>Caracteristicas: {found.country} </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        {/* {!isLoggedIn && (
                                    <>

                                    </>
                                )}

                                {isLoggedIn &&(
                                                                            
                                    <>

                                <Form className="mt-5" >
                                    <Form.Label>Add Review</Form.Label>
                                    <Form.Group className="mb-2" controlId="review">
                                        <InputGroup  >
                                            <Form.Control 
                                            placeholder="Comentario"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                            type="text"
                                            onChange={addReview}
                                            />
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group controlId="rating">
                                        <InputGroup  >
                                            <Form.Control 
                                            placeholder="rating"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                            type="number"
                                            onChange={addReview}
                                            />
                            
                                        </InputGroup>
                                    </Form.Group>
                                    <Button onClick={(event) => Comentar(event, review)} variant="outline-secondary" id="button-addon2">
                                         Enviar
                                    </Button>
                                </Form>
                                    </>

                                    
                                    )
                                }

                                <ReviewsApi found={found}/> */}
                       
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetailsFound