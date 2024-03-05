import { useState, useEffect } from "react";
import {Container, Col, Row, Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Search from "../../components/search";
// TODO Recibir los places desde el estado incial
const Places = ({places}) => {
    const navigation = useNavigate();
    // TODO crear estado para la busqueda para cuando tenga el componente de busqueda
    const [search, setSearch] = useState("");
    const [filteredPlaces, setFilteredPlaces] = useState(places);

    // effecto
    useEffect(() => {
        if(search === "") {
            setFilteredPlaces(places)
        }else {
            const filtered = [places].filter(place => place.name.toLowerCase().includes(search.toLowerCase()))
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
    return (

        <div className="m-5">
            <Container>
            {/* TODO crear comoponente busqueda y agregarlo */}
            <Search value={search} onChange={handleChange}/>
            <Row xs={1} md={2} className="g-4">
                {filteredPlaces.map((place)=>
                    <Col key={place.id}>
                        <Card onClick={(event) => handleClick(event, place.id)}>
                            <Card.Img variant="top" src={place.image} />
                            <Card.Body>
                                <Card.Title>{place.name}</Card.Title>
                                <Card.Text>
                                    {place.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
                </Row>
            </Container>
        </div>
    )
}
export default Places;