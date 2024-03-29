import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
// Paginas anteriores
import Login from "../pages/login";
import Register from "../pages/register";
import Profile from "../pages/profile";
import { getAllPlaces } from "../data/api";
// importar las paginas que ahora llaman a un api rest
import PlacesApi from "../pages/api/places";
import DetailsApi from "../pages/api/details"
import Founds from "../pages/api/founds";
import DetailsFound from '../pages/api/detailsFound'
import initialState from "../data/initialState";
import ProfileUser from "../pages/api/profileUser";

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

    const [places, setPlaces] = useState();
    useEffect(() => {
        const fetchPlaces = async () => {
             const response = await getAllPlaces()
             setPlaces(response.data)
        }
        fetchPlaces().then()
     }, [])

    return(
        <BrowserRouter>
            <Layout logout={handleLogout}>
                <Routes>
                    {/* pasar informacion para componentes */}
                    <Route path="/" element={<PlacesApi />} />
                    <Route path="/places" element={<PlacesApi />} />
                    <Route path="/founds" element={<Founds />} />
                    <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
                    <Route path="/register" element={<Register handleRegister={handleRegister}/>} />
                    <Route path="/profile" element={<Profile places={places}/>} />
                    <Route path="/userprofile/:id" element={<ProfileUser/>} />
                    <Route path="/details/:id" element={<DetailsApi />} />
                    <Route path="/detailsFound/:id" element={<DetailsFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router;