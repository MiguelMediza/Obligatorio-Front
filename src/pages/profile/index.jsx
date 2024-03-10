import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import AddPlaceForm from "../../components/formPlace";
import PlacesForUser from "../../components/placesUser";
import AddFormFound from "../../components/formFound"
import FoundForUser from "../../components/foundUser";
const Profile = ({places}) => { 
    const navigation = useNavigate();

    return (
        <Container>

            <AddPlaceForm/>
            <PlacesForUser/>
            <AddFormFound places={places}/>
            <FoundForUser/>
        </Container>
    )
}

export default Profile;