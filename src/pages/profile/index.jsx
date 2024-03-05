import {useState} from "react";
import {Container, Row, Col} from "react-bootstrap"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
const Profile = ({events}) => { 
    
    const[place, setPlace] = useState({
        name: "",
        image: "",
        description: "",
        location: "",
        rating: 0,
        reviews: [],
        events: []
    })

    const[event, setEvent] = useState({
        name: "",
        image: "",
        description: "",
        location: "",
        rating: 0,
        reviews: [],
        events: []
    })

    const placeIds = events.map((event) => event.id)

    const handleAddPlace = (e) => {
        e.preventDefault()
        console.log("HandleAddPlace")

    }
    
    const handleAddEvent = (e) => {
        e.preventDefault()
        console.log("handleAddEvent")

    }

    const onAddPlace = (e) => {
        e.preventDefault()
        const value = e.target.value;
        const element = e.target.id;

        setPlace({...place, [element]: value})
    }
    const onAddEvent = (e) => {
        e.preventDefault()
        const value = e.target.value;
        const element = e.target.id;

        setEvent({...event, [element]: value})
    }


    return (
        <Container>
            <Row>
                <Col>
                <div className="m-3">
                <h1>Add Place</h1>
                    <Form className="m-2" onSubmit={handleAddPlace}>
                        <Form.Group controlId="name">
                            <Form.Label>
                                Place name
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter plance name"
                                value={place.name}
                                onChange={onAddPlace}
                            />
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>
                                Place description
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter plance description"
                                value={place.description}
                                onChange={onAddPlace}
                            />
                        </Form.Group>

                        <Form.Group controlId="location">
                            <Form.Label>
                                Place location
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter plance location"
                                value={place.location}
                                onChange={onAddPlace}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="m-2">
                            Add Place
                        </Button>

                    </Form>
                </div>
                </Col>
            </Row>

            <Row>
                <Col>
                <div className="m-3">
                <h1>Add Event</h1>
                    <Form className="m-2" onSubmit={handleAddEvent}>
                        <Form.Label>Place Id</Form.Label>
                        <Form.Select aria-label="Place id">
                            {placeIds.map((id, index) => (
                                <option key={index} value={id}>
                                    {id}
                                </option>
                            ))}
                        </Form.Select>

                        <Form.Group controlId="name">
                            <Form.Label>
                                Place name
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter plance name"
                                value={event.name}
                                onChange={onAddEvent}
                            />
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>
                                Place description
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter plance description"
                                value={event.description}
                                onChange={onAddEvent}
                            />
                        </Form.Group>

                        <Form.Group controlId="location">
                            <Form.Label>
                                Place location
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter plance location"
                                value={event.location}
                                onChange={onAddEvent}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="m-2">
                            Add Event
                        </Button>

                    </Form>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile;