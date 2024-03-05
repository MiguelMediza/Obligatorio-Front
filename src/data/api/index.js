const URL = "https://history-hunters-api.onrender.com";

const getAllPlaces = async () => {
    try {
        const response = await fetch(`${URL}/places`)
        return await response.json()
    }catch(error) {
        console.log("On getAllPlaces", error)
    }
}

const getAllReviews = async () => {
    try {
        const response = await fetch(`${URL}/reviews`)
        return await response.json()

    }catch(error) {
        console.log("On getAllReviews", error)
    }
}

const getPlaceById = async (id) => {
    try {
        const response = await fetch(`${URL}/places/${id}`)
        return await response.json()
    }catch(error) {
        console.log("On getAllPlacesById", error)
    }
}

const getAllEvents = async () => {
    try {
        const response = await fetch(`${URL}/events`)
        return await response.json()
    }catch(error) {
        console.log("On getAllEvents", error)
    }
}

const getEventById = async (id) => {
    try {
        const response = await fetch(`${URL}/events/${id}`)
        return await response.json()
    }catch(error) {
        console.log("On getEventById", error)
    }
}

export {
    getAllPlaces,
    getAllEvents,
    getPlaceById,
    getEventById,
    getAllReviews
}