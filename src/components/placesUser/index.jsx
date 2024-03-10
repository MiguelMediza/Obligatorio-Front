import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getPlaceByUser } from '../../data/api'
import Search from '../search';
import { useNavigate } from 'react-router-dom';
const PlacesForUser = () => {
    const [places, setPlaces] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredPlaces, setFilteredPlaces] = useState(places);
    const tokenString = localStorage.getItem('user-info');
    const userToken = JSON.parse(tokenString);

    const navigation = useNavigate();

    useEffect(() => {
        const fetchPlaces = async () => {
             const response = await getPlaceByUser(userToken.id)
             setPlaces(response.data)
        }
        fetchPlaces().then()
     }, []) 

     async function EliminarPlace(event,id) {
        event.preventDefault();
        const response = confirm(`Estas seguro que deseas eliminar este place?`)
        if(response){
            let result = await fetch(`https://history-hunters-api.onrender.com/places/delete/${id}`,{
                method: 'DELETE',
                headers:{
                    "Content-Type":'application/json',
                    "Accept": 'application/json'
                }
            })
            result = await result.json()
            navigation('/')
        }
        

    } 
      

     
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

  return (
    <div className="m-5">
    <Container>
        {/* TODO crear comoponente busqueda y agregarlo */}
        <h1 className='text-center'>Mis places</h1>
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
                <Button variant="outline-danger" onClick={(event) => EliminarPlace(event, place.id)}>Eliminar</Button>
            </Col>
            )}
        </Row>
    </Container>
</div>
  )
}

export default PlacesForUser