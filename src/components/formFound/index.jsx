import React from 'react'
import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom";
import Error from "../error"
import Accordion from 'react-bootstrap/Accordion';

const AddFormFound = ({places}) => {
    const navigation = useNavigate();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const tokenString = localStorage.getItem('user-info');
    const userToken = JSON.parse(tokenString);
    const [option, setOption] = useState();
    const today = new Date();
    const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;


    const validateForm = () =>{
        if(document.getElementById("placeId").value == ""){
            setError(true)
            setErrorMessage("Debes ingresar un id de place!")
            return false
        }
        if(found.name.trim() === ""){
            setError(true)
            setErrorMessage("Debes ingresar un nombre!")
            return false
        }
        if(found.description.trim()==""){
            setError(true)
            setErrorMessage("Debes ingresar una descripción!")
            return false
        }
        if(found.type.trim()==""){
            setError(true)
            setErrorMessage("Debes ingresar un tipo!")
            return false
        }
        if(found.region.trim()==""){
            setError(true)
            setErrorMessage("Debes ingresar una región!")
            return false
        }
        if(found.city.trim()==""){
            setError(true)
            setErrorMessage("Debes ingresar una ciudad!")
            return false
        }
        if(document.getElementById("country").value == ""){
            setError(true)
            setErrorMessage("Debes seleccionar un país!")
            return false
        }

        return true
    }

    const[found, setFound] = useState({
        placeId: "",
        userId: userToken.id,
        name: "",
        description: "",
        date: formattedDate,
        images: [],
        type: "",
        region: "",
        city: "",
        country: "Uruguay"
    })

    const handleAddFound = (e) => {
        e.preventDefault()
        if(!validateForm()){
            return
        }

        AgregarFound();

    }

    async function AgregarFound(){
        let result = await fetch("https://history-hunters-api.onrender.com/founds/add",{
            method: 'POST',
            body:JSON.stringify(found),
            headers:{
                "Content-Type":'application/json',
                "Accept": 'application/json'
            }
        })

        result = await result.json()
        console.log(result);
        navigation(`/`)
        {/*Agregar mensaje de que se a creado correctamente o fallo */}
    }

    const handleImageChange = (e) => {
        var imageUrl = e.target.value;
        setFound({ ...found, images: [{ url: imageUrl }] });
      };


    const onAddFund = (e) => {
        e.preventDefault()
        const value = e.target.value;
        const element = e.target.id;
        setFound({...found, [element]: value})
        console.log(found);
    }

    if (places == undefined) {
  return console.log("Cargando Datos...");
    }
    else{
        var nuevoArray = places.map((place) => ({
            id: place.id,
            name: place.name,
          }));
    }

    return (
        <Accordion defaultActiveKey="">
        <Container>
            <Row>
                <Col>
                <h1>Agregar objetos</h1>
                <Accordion.Item eventKey="0">
                <Accordion.Header>Desplegar Formulario</Accordion.Header>
                <Accordion.Body>
                <div className="m-3">
                
                    <Form className="m-2" onSubmit={handleAddFound}>
                    {error && 
                <Error>
                    {errorMessage}
                </Error>}
                        <Form.Group controlId="placeId">
                        <Form.Label>
                                ID del lugar
                            </Form.Label>

                        <Form.Select aria-label="Place id" onChange={onAddFund} value={found.placeId}>
                            <option value="" disabled>Seleccione el lugar</option>
                            {nuevoArray.map((place) => (
                                <option key={place.id} value={place.id}>
                                    {place.id} {place.name}
                                </option>
                            ))}
                        </Form.Select>
                        </Form.Group>
                        <Form.Group controlId='name'>
                            <Form.Label>
                                Nombre del objeto
                            </Form.Label>

                            <Form.Control
                                type="text"
                                foundholder="Enter found name"
                                value={found.name}
                                onChange={onAddFund}
                            />
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>
                                Descripción del objeto
                            </Form.Label>

                            <Form.Control
                                type="text"
                                foundholder="Enter found description"
                                value={found.description}
                                onChange={onAddFund}
                            />
                        </Form.Group>

                        <Form.Group controlId="images">
                            <Form.Label>
                                Imágenes
                            </Form.Label>
                            <Form.Control
                                name="imageUrl"
                                type="url"
                                placeholder="Enter found image"
                                onChange={handleImageChange}
                            />
                        </Form.Group>
                        
                        <Form.Group controlId="type">
                            <Form.Label>
                                Tipo
                            </Form.Label>
                            <Form.Control
                                type="text"
                                foundholder="Enter found type"
                                value={found.type}
                                onChange={onAddFund}
                            />
                        </Form.Group>
                        
                        <Form.Group controlId="region">
                            <Form.Label>
                                Región
                            </Form.Label>
                            <Form.Control
                                type="text"
                                foundholder="Enter found region"
                                value={found.region}
                                onChange={onAddFund}
                            />
                        </Form.Group>


                        <Form.Group controlId="city">
                            <Form.Label>
                                Ciudad
                            </Form.Label>
                            <Form.Control
                                type="text"
                                foundholder="Enter found city"
                                value={found.city}
                                onChange={onAddFund}
                            />
                        </Form.Group>

                        <Form.Group controlId="country">
                            <Form.Label>
                                País
                            </Form.Label>
                            <Form.Control
                                type="text"
                                foundholder="Enter found country"
                                value={found.country}
                                onChange={onAddFund}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="m-2">
                            Agregar objeto
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

export default AddFormFound