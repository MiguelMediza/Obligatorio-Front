import { useState, useEffect } from "react";
import {Container, Col, Row, Card} from "react-bootstrap";
// importar la funcion que se encarga de traer todo los founds
import {getFoundById} from "../../../data/api"
import { useParams } from 'react-router-dom';
import ReviewsApi from "../../../components/reviews";    

const DetailsFound = () => {
    const { id } = useParams();
    const [found, setFound] = useState([]);
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
                       
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetailsFound