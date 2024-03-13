import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getFoundByUser } from '../../data/api'
import Search from '../search';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const FoundForUser = (props) => {
    const [founds, setFound] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredFounds, setFilteredFounds] = useState(founds);
    const tokenString = localStorage.getItem('user-info');
    const userToken = JSON.parse(tokenString);
    const { id } = useParams();

    const navigation = useNavigate();


    useEffect(() => {
        const fetchFounds = async () => {
            if(props.verUser == true){
                var response = await getFoundByUser(props.idUser)

            }
            else{
                  response = await getFoundByUser(userToken.id)

            }
             
             setFound(response.data)
        }
        fetchFounds().then();
     }, []) 
     
     async function EliminarFound(event,id) {
        event.preventDefault();
        const response = confirm(`Estas seguro que deseas eliminar este found?`)
        if(response){
            let result = await fetch(`https://history-hunters-api.onrender.com/founds/delete/${id}`,{
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
            setFilteredFounds(founds)
        }else {
            const filtered = founds.filter(found => found.name.toLowerCase().includes(search.toLowerCase() ))
            setFilteredFounds(filtered)
        }
    }, [founds, search])


    const handleClick = (event, id) => {
        event.preventDefault();
        // TODO redirigir a la página de detalle
        navigation(`/details/${id}`);
    }

    const handleChange = (event)=> {
        const value = event.target.value
        setSearch(value)
    }
    if(props.verUser == true){
        var FoundsDelUser = founds.filter((found) => found.userId == props.idUser);
    }
    else{
       var  FoundsDelUser = founds.filter((found) => found.userId == userToken.id);
    }
     
  return (
    <div className="m-5">
    <Container>
        {/* TODO crear comoponente busqueda y agregarlo */}

       
        
        <Row xs={1} md={2} className="g-4">
            {props.verUser && props.verUser == true ?
            (
                <h1 className='text-center'>Founds del user</h1>
            ):
            (
                <h1 className='text-center'>Mis founds</h1>
            )}
        {FoundsDelUser && FoundsDelUser.length > 0 ? 
            (
                <>
                    
                    <Search value={search} onChange={handleChange} />
                    { filteredFounds.map((found) => <Col key={found.id}>
                        <Card onClick={(event) => handleClick(event, found.id)}>
                            <Card.Img variant="top" src={found.images[0].url} />
                            <Card.Body>
                                <Card.Title>{found.name}</Card.Title>
                                <Card.Text>
                                    {found.description}
                                </Card.Text>
                                <Card.Text>
                                    Type: {found.type}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Button variant="outline-danger" onClick={(event) => EliminarFound(event, found.id)}>Eliminar</Button>
                    </Col>
                    )}
                </>
            
            ) :
            (
                <>
                <h5 className='text-center'>No hay founds agregados de momento...</h5>
                </>
            )}
        </Row>
    </Container>
    </div>
  )
}

export default FoundForUser