import { useState, useEffect } from "react";
import {Container, Col, Row, Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Search from "../../../components/search";
// importar la funcion que se encarga de traer todo los places
import {getAllPlaces} from "../../../data/api"
const PlacesApi = ({isLoggedIn}) => {
    const navigation = useNavigate();
    const [places, setPlaces] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredPlaces, setFilteredPlaces] = useState(places);


    const tokenString = localStorage.getItem('user-info');
    const userToken = JSON.parse(tokenString);
    if(userToken != null){
        isLoggedIn= true
    };

    useEffect(() => {
       const fetchPlaces = async () => {
            const response = await getAllPlaces()
            setPlaces(response.data)
       }
       fetchPlaces().then()
    }, [])

    
    //Filtrar por name

    useEffect(() => {
        if(search === "") {
            setFilteredPlaces(places)
        }else {

            const filtered = places.filter(place => place.name.toLowerCase().includes(search.toLowerCase() ))
            const set1 = new Set(filtered)
            const filtered2 = places.filter(place => place.type.toLowerCase().includes(search.toLowerCase() ))
            const set2 = new Set(filtered2)
            const combinedSet = new Set([...set1, ...set2]);
            const combinedArray = Array.from(combinedSet);
            setFilteredPlaces(combinedArray)
        }
    }, [places, search])
    //#endregion


    //#endregion
    
    const handleClick = (event, id) => {
        event.preventDefault();
        navigation(`/details/${id}`);
    }

    const handleChange = (event)=> {
        const value = event.target.value
        setSearch(value)
    }

        return (

            <div className="m-5">
                <Container>
                    {/* TODO crear comoponente busqueda y agregarlo */}

                    <Search value={search} onChange={handleChange} />
                    <Row xs={1} md={2} className="g-4">
                        {filteredPlaces.map((place) => 
                        <Col key={place.id}>
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