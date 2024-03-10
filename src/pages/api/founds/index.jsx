import React from 'react'
import { useState, useEffect } from "react";
import {Container, Col, Row, Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Search from "../../../components/search";
// importar la funcion que se encarga de traer todo los founds
import {getAllFounds} from "../../../data/api"
const Founds = () => {
    const navigation = useNavigate();
    const [founds, setFounds] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredFounds, setFilteredFounds] = useState(founds);

    useEffect(() => {
       const fetchFounds = async () => {
            const response = await getAllFounds()
            setFounds(response.data)
       }
       fetchFounds().then()
    }, [])

    // effecto
    useEffect(() => {
        if(search === "") {
            setFilteredFounds(founds)
        }else {
            const filtered = founds.filter(found => found.name.toLowerCase().includes(search.toLowerCase() ))
            setFilteredFounds(filtered)
        }
    }, [founds, search])

    
    const handleClick = (event, id) => {
        event.preventDefault();
        // TODO redirigir a la página de detalle de founds
        navigation(`/detailsFound/${id}`);
    }

    const handleChange = (event)=> {
        const value = event.target.value
        setSearch(value)
    }

        return (

            <div className="m-5">
                <Container>
                    {/* TODO crear comoponente busqueda y agregarlo */}
                    <h1 className='text-center'>Objetos encontrados por la comunidad</h1>
                    <Search value={search} onChange={handleChange} />
                    <Row xs={1} md={2} className="g-4">
                        {filteredFounds.map((found) => <Col key={found.id}>
                            <Card onClick={(event) => handleClick(event, found.id)}>
                                <Card.Img variant="top" src={found.images[0].url} />
                                <Card.Body>
                                    <Card.Title>{found.name}</Card.Title>
                                    <Card.Text>
                                        {found.description}
                                    </Card.Text>
                                    <Card.Text>
                                        {found.location}
                                    </Card.Text>
                                    <Card.Text>
                                        Type: {found.type}
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

export default Founds