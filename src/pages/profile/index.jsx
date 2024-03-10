import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import AddPlaceForm from "../../components/formPlace";
import PlacesForUser from "../../components/placesUser";
const Profile = ({events}) => { 
    const navigation = useNavigate();


    return (
        <Container>

            <AddPlaceForm/>
            <PlacesForUser/>
        </Container>
    )
}

export default Profile;