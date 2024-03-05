import { useState, useEffect } from "react";
import {Container, Col, Row, Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Search from "../../../components/search";
// importar la funcion que se encarga de traer todo los places
import {getAllPlaces} from "../../../data/api"
import Form from "react-bootstrap/Form"; 
const PlacesApi = () => {
    const navigation = useNavigate();
    const [places, setPlaces] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredPlaces, setFilteredPlaces] = useState(places);

    useEffect(() => {
       const fetchPlaces = async () => {
            const response = await getAllPlaces()
            setPlaces(response.data)
       }
       fetchPlaces().then()
    }, [])

    
    // effecto
    useEffect(() => {
        if(search === "") {
            setFilteredPlaces(places)
        }else {
            const filtered = places.filter(place => place.name.toLowerCase().includes(search.toLowerCase() ))
            setFilteredPlaces(filtered)
        }
    }, [places, search])

    
    const handleClick = (event, id) => {
        event.preventDefault();
        // TODO redirigir a la página de detalle
        navigation(`/details/${id}`);
    }

    const handleChange = (event)=> {
        const value = event.target.value
        setSearch(value)
    }

        const paisesUnicos = [...new Set(places.map((place) => place.location))];
        return (

            <div className="m-5">
                <Container>
                    {/* TODO crear comoponente busqueda y agregarlo */}

                    <Form>
                        <Form.Label>Select Location</Form.Label>
                        <Form.Select aria-label="Place id" value={location} onChange={handleChange}>
                            <option value="" disabled selected="selected">Select Location</option>
                            {paisesUnicos.map((location, index) => (

                                <option key={index} value={location}>
                                    {location}
                                </option>
                            ))}
                        </Form.Select>

                    </Form>


                    <Search value={search} onChange={handleChange} />
                    <Row xs={1} md={2} className="g-4">
                        {filteredPlaces.map((place) => <Col key={place.id}>
                            <Card onClick={(event) => handleClick(event, place.id)}>
                                <Card.Img variant="top" src={place.images[0].url} />
                                <Card.Body>
                                    <Card.Title>{place.name}</Card.Title>
                                    <Card.Text>
                                        {place.description}
                                    </Card.Text>
                                    <Card.Text>
                                        {place.location}
                                    </Card.Text>
                                    <Card.Text>
                                        Type: {place.type}
                                    </Card.Text>
                                    <Card.Text>
                                        Puntuación: {place.score} Stars
                                    </Card.Text>
                                    <Card.Text>
                                        Address: {place.address}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        )}
                    </Row>
                </Container>
            </div>
        );
    }

export default PlacesApi