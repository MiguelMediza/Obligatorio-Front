import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
// Paginas anteriores
import Login from "../pages/login";
import Register from "../pages/register";
import Profile from "../pages/profile";
import DetailEvent from "../pages/detailEvent"

// importar las paginas que ahora llaman a un api rest
import PlacesApi from "../pages/api/places";
import EventsApi from "../pages/api/events";
import DetailsApi from "../pages/api/details"

import initialState from "../data/initialState";
    const tokenString = localStorage.getItem('user-info');
    const userToken = JSON.parse(tokenString);
const Router = () => {
    // definir un estado que almacene el estado inicial
    const [state, setState] = useState(initialState);
    const handleLogout = () => {
        setState((prevState) => ({
            ...prevState,
            currentUser: null
        }))
    }

    const handleRegister = (user) => {
        setState((prevState) => ({
            ...prevState,
            currentUser: user
        }))
    }

    const handleLogin = (user) => {
        setState((prevState) => ({
            ...prevState,
            currentUser: user,
        }))


    }

    const getAllEvents = () => {
        const events = state.places.map((place) => place.events || []).flat()
        return events
    }


    return(
        <BrowserRouter>
            <Layout logout={handleLogout}>
                <Routes>
                    {/* pasar informacion para componentes */}
                    <Route path="/" element={<PlacesApi />} />
                    <Route path="/places" element={<PlacesApi />} />
                    <Route path="/events" element={<EventsApi />} />
                    <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
                    <Route path="/register" element={<Register handleRegister={handleRegister}/>} />
                    <Route path="/profile" element={<Profile events={getAllEvents()}/>} />
                    <Route path="/details/:id" element={<DetailsApi />} />
                    <Route path="/details/:id/event/:ide" element={<DetailEvent places={state.places}/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router;