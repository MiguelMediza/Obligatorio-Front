import {useState, useEffect} from 'react'
import {Container, Col, Row} from "react-bootstrap";
import { Card } from "react-bootstrap";
import Search from "../../../components/search";
import { useNavigate } from "react-router-dom";
import {getAllEvents} from "../../../data/api"

const EventsApi = () => {
    const navigation = useNavigate();
    const [events, setEvents] = useState([])
    const [search, setSearch] = useState("");
    const [searchFiltered, setSearchFiltered] = useState([]);

    useState(() => {
        const fetchEvents = async () => {
            const response = await getAllEvents()
            setEvents(response.data)
        }
        fetchEvents().then(() => console.log("Events called"))
    }, [])

    useEffect(() => {
        if(search === "") {
            setSearchFiltered(events)
        }else {
            const searchFiltered = events.filter((event) => event.name.toLowerCase().includes(search.toLowerCase()))
            setSearchFiltered(searchFiltered)
        }

    }, [events, search])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleClick = (e, placeId, eventId) => {
        e.preventDefault();
        navigation(
            `/details/${placeId}/event/${eventId}` , {
                state: {events: events}
            }
        )
    }
    return (
        <div className="m-5">
            <Container>
            <Search value={search} onChange={handleChange}/>
            <Row xs={1} md={2} className="g-4">
                {searchFiltered.map((event)=>
                    <Col key={event.id}>
                        <Card onClick={(evt) => handleClick(evt, event.placeId, event.id)}>
                            <Card.Img variant="top" src={event.image} />
                            <Card.Body>
                                <Card.Title>{event.name}</Card.Title>
                                <Card.Text>
                                    {event.description}
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

export default EventsApi