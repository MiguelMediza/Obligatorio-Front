import React, {useState} from "react";
import Button  from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import initialState from "../../data/initialState";
const Register = ({handleRegister}) => {
    const navigation = useNavigate();
    const [user, setUser] = useState({
        id:5,
        name: "",
        lastname: "",
        address: "",
        email: "",
        password: ""
    })

    // funciones handler
    const [state, setState] = useState(initialState);

    const handleChange = (e) => {
        // cambiar o actualizar los datos del objeto user
        const value = e.target.value;
        const element = e.target.id;
        setUser({...user, [element]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        singUp();
        handleRegister(user)
        navigation('/places')
    }

    async function singUp(){
        const name = user.name;
        const lastname = user.lastname;
        const address= user.address;
        const email = user.email;
        const password = user.password;
        
        let oneUser= {name, lastname, address, email, password }

       let result = await fetch("https://history-hunters-api.onrender.com/users/register",{
            method: 'POST',
            body:JSON.stringify(oneUser),
            headers:{
                "Content-Type":'application/json',
                "Accept": 'application/json'
            }
        })

        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(oneUser))
        navigation('/')
        setState(initialState.currentUser = oneUser)
        
    }
    return (
        <div>
            <h2>Register</h2>
            <div className="col-4 mx-auto m-5">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>
                            Name
                        </Form.Label>
                        <Form.Control
                        required
                        type="name"
                        placeholder="Name"
                        value={user.name}
                        onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="lastname">
                        <Form.Label>
                            Last Name
                        </Form.Label>
                        <Form.Control
                        required
                        type="lastname"
                        placeholder="Last Name"
                        value={user.lastname}
                        onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="address">
                        <Form.Label>
                            Address
                        </Form.Label>
                        <Form.Control
                        required
                        type="address"
                        placeholder="Address"
                        value={user.address}
                        onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>
                            Email
                        </Form.Label>
                        <Form.Control
                        required
                        type="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Register;