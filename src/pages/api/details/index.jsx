import { useState, useEffect } from "react";
import {Container, Col, Row, Card} from "react-bootstrap";
// importar la funcion que se encarga de traer todo los places
import {getPlaceById} from "../../../data/api"
import { useParams } from 'react-router-dom';
import ReviewsApi from "../../../components/reviews";    
import FoundsForPlace from "../../../components/FoundsForPlace";
const  DetailsApi = () => {

    const { id } = useParams();
    const [place, setPlace] = useState([]);
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
                        
                                <>
                                    
                                    <ReviewsApi place={place} />

                                    <FoundsForPlace place={place}/>
                                </>
                       
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetailsApi