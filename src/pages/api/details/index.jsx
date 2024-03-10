import { useState, useEffect } from "react";
import {Container, Col, Row, Card, InputGroup, Form, Button} from "react-bootstrap";
// importar la funcion que se encarga de traer todo los places
import {getPlaceById} from "../../../data/api"
import { useParams } from 'react-router-dom';
import ReviewsApi from "../../../components/reviews";    
import Comments from "../../../components/comments";
import FoundsForPlace from "../../../components/FoundsForPlace";
import { useNavigate } from "react-router-dom";
const  DetailsApi = ({isLoggedIn}) => {
    const tokenString = localStorage.getItem('user-info');
    const userToken = JSON.parse(tokenString);
    const navigation = useNavigate();
    const { id } = useParams();
    const [place, setPlace] = useState([]);
    const [comentario, setComentario] = useState({
        userId: "",
        placeId: id,
        comment: ""
    });
    useEffect(() => {
        const fetchPlaces = async () => {
             const response = await getPlaceById(id)
             setPlace(response.data)
            
        }
        fetchPlaces().then()
     }, [])

     if (place.images && place.images[0]) {
        var imageUrl = place.images[0].url;
      }
 
      if(userToken != null){
        isLoggedIn= true
    };

    const addComentario = (e) => {
        e.preventDefault()
        const value = e.target.value;
        const element = e.target.id;
        setComentario(comentario.userId = userToken.id)
        setComentario({...comentario, [element]: value})
    }
    async function Comentar(event,comentario) {
        event.preventDefault();
        const response = confirm(`Estas seguro que quieres comentar?`)
        if(response){
            let result = await fetch(`https://history-hunters-api.onrender.com/comments/add`,{
                method: 'POST',
                body:JSON.stringify(comentario),
                headers:{
                    "Content-Type":'application/json',
                    "Accept": 'application/json'
                }
            })
            result = await result.json()
            
            if(result.status == 201){
                alert("Comentario agregado existosamente")
            }
            else{
                alert("Ocurrio un error al agregar un comentario")
            }
            navigation('/profile')
        }
    
    } 
     return (
    
        <div className="m-5">
            <Container>
            {/* TODO crear comoponente busqueda y agregarlo */}
            <Row xs={1} md={1} className="g-4">
                
                    <Col >
                        <Card>
                            <Card.Img variant="top" src={imageUrl} />
                            <Card.Body>
                                <Card.Title>{place.name}</Card.Title>
                                <Card.Text>
                                    {place.description}
                                </Card.Text>
                                <Card.Text>
                                    <p>Location: {place.location}</p>
                                </Card.Text>
                                <Card.Text>
                                   <p className="">Address: {place.address}</p>
                                </Card.Text>
                                <Card.Text>
                                    Calificación: {place.score} Stars
                                </Card.Text>
                                <Card.Text>
                                    <p>Tipo: {place.type} </p>
                                </Card.Text>
                                <Card.Text>
                                    <p>Caracteristicas: {place.characteristics} </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {!isLoggedIn && (
                                    <>

                                    </>
                                )}

                                {isLoggedIn &&(
                                                                            
                                    <>
                                    <Form.Group controlId="comment">
                                        <InputGroup  >
                                            <Form.Control 
                                            placeholder="Comentario"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                            type="text"
                                            onChange={addComentario}
                                            />
                                            <Button onClick={(event) => Comentar(event, comentario)} variant="outline-secondary" id="button-addon2">
                                            Enviar
                                            </Button>
                                        </InputGroup>
                                        </Form.Group>
                                    </>

                                   
                                    )
                                }
                                <>
                                    
                                    <ReviewsApi place={place} />
                                    <Comments place={place}/>
                                    <FoundsForPlace place={place}/>
                                </>
                       
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetailsApi