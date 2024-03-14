import React from 'react'
import {useState} from "react";
import {Container, Row, Col} from "react-bootstrap"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom";
import Error from "../error"
import Accordion from 'react-bootstrap/Accordion';
const AddPlaceForm = () => {
    const navigation = useNavigate();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const tokenString = localStorage.getItem('user-info');
    const userToken = JSON.parse(tokenString);
    const cleanForm = () =>{
        setPlace("");
    }

    const handleImageChange = (e) => {
        var imageUrl = e.target.value;
        setPlace({ ...place, images: [{ url: imageUrl }] });
      };
    const validateForm = () =>{
        if(place.name.trim() === ""){
            setError(true)
            setErrorMessage("Debes ingresar un nombre!")
            return false
        }
        if(place.description.trim()==""){
            setError(true)
            setErrorMessage("Debes ingresar una descripción!")
            return false
        }
        if(place.address.trim()==""){
            setError(true)
            setErrorMessage("Debes ingresar una dirección!")
            return false
        }
        if(place.latitude.valueOf() == 0 ){
            setError(true)
            setErrorMessage("Debes ingresar una latitude!")
            return false
        }
        if(place.longitude.valueOf() == 0){
            setError(true)
            setErrorMessage("Debes ingresar una longitude!")
            return false
        }
        if(place.location.trim()==""){
            setError(true)
            setErrorMessage("Debes ingresar una location!")
            return false
        }
        if(place.type.trim()==""){
            setError(true)
            setErrorMessage("Debes ingresar un tipo!")
            return false
        }
        if(place.characteristics.trim()==""){
            setError(true)
            setErrorMessage("Debes ingresar una caracteristica!")
            return false
        }
        if(place.score.trim()==""){
            setError(true)
            setErrorMessage("Debes ingresar un score!")
            return false
        }
        if(place.country.trim()==""){
            setError(true)
            setErrorMessage("Debes ingresar un country!")
            return false
        }
        if(place.region.trim()==""){
            setError(true)
            setErrorMessage("Debes ingresar una región!")
            return false
        }

        return true
    }

    const[place, setPlace] = useState({
        userId: userToken.id,
        name: "",
        description: "",
        address: "",
        latitude: 0,
        longitude: 0,
        images: [],
        location: "",
        type: "",
        characteristics: "",
        score: 0,
        country: "Uruguay",
        region: ""
    })

    const handleAddPlace = (e) => {
        e.preventDefault()
        if(!validateForm()){
            return
        }


        AgregarPlace();

    }

    async function AgregarPlace(){
        let result = await fetch("https://history-hunters-api.onrender.com/places/add",{
            method: 'POST',
            body:JSON.stringify(place),
            headers:{
                "Content-Type":'application/json',
                "Accept": 'application/json'
            }
        })

        result = await result.json()
        if(result.status == 201){
            alert(result.message)
        }
        navigation(`/`)
        {/*Agregar mensaje de que se a creado correctamente o fallo */}
    }

    const onAddPlace = (e) => {
        e.preventDefault()
        const value = e.target.value;
        const element = e.target.id;
        console.log(place);
        setPlace({...place, [element]: value})
    }


    return (
        <Accordion defaultActiveKey="">
        <Container>
            

            <Row>
                <Col>
                <h1 className="text-red-600	">Agregar lugar</h1>
                <Accordion.Item eventKey="0">
                <Accordion.Header>Desplegar formulario</Accordion.Header>
                <Accordion.Body>
                <div className="m-3">
                
                    <Form className="m-2" onSubmit={handleAddPlace}>
                    {error && 
                <Error>
                    {errorMessage}
                </Error>}
                        <Form.Group controlId="name">
                            <Form.Label>
                                Nombre del lugar
                            </Form.Label>

                            <Form.Control
                                type="text"
                                placeholder="Enter place name"
                                value={place.name}
                                onChange={onAddPlace}
                            />
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>
                                Lugar descripción
                            </Form.Label>

                            <Form.Control
                                type="text"
                                placeholder="Enter place description"
                                value={place.description}
                                onChange={onAddPlace}
                            />
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Label>
                                Dirección
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter place address"
                                value={place.address}
                                onChange={onAddPlace}
                            />
                        </Form.Group>

                        <Form.Group controlId="latitude">
                            <Form.Label>
                                Latitude
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter place latitude"
                                value={place.latitude}
                                onChange={onAddPlace}
                            />
                        </Form.Group>

                        <Form.Group controlId="longitude">
                            <Form.Label>
                                Longitude
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter place loongitude"
                                value={place.longitude}
                                onChange={onAddPlace}
                            />
                        </Form.Group>

                        <Form.Group controlId="images">
                            <Form.Label>
                                Imagen
                            </Form.Label>
                            <Form.Control
                                name="imageUrl"
                                type="url"
                                placeholder="Enter place image"
                                onChange={handleImageChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="location">
                            <Form.Label>
                                Location
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter place location"
                                value={place.location}
                                onChange={onAddPlace}
                            />
                        </Form.Group>

                        <Form.Group controlId="type">
                            <Form.Label>
                                Tipo
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter place type"
                                value={place.type}
                                onChange={onAddPlace}
                            />
                        </Form.Group>

                        <Form.Group controlId="characteristics">
                            <Form.Label>
                                Características
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter place characteristics"
                                value={place.characteristics}
                                onChange={onAddPlace}
                            />
                        </Form.Group>

                        <Form.Group controlId="score">
                            <Form.Label>
                                Puntuación
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter place Score"
                                value={place.score}
                                onChange={onAddPlace}
                            />
                        </Form.Group>

                        <Form.Group controlId="country">
                            <Form.Label>
                                País
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter place country"
                                value={place.country}
                                onChange={onAddPlace}
                            />
                        </Form.Group>

                        <Form.Group controlId="region">
                            <Form.Label>
                                Región
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter place region"
                                value={place.region}
                                onChange={onAddPlace}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="m-2 text-center">
                            Agregar lugar
                        </Button>

                    </Form>
                </div>
                </Accordion.Body>
                </Accordion.Item>
                </Col>
            </Row>

            </Container>
            </Accordion>
               
        )
    }

export default AddPlaceForm