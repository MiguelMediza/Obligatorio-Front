import React, {useState} from "react";
import Button  from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = ({handleLogin}) => {
    const navigation = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        // cambiar o actualizar los datos del objeto user
        const value = e.target.value;
        const element = e.target.id;
        setUser({...user, [element]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // llamar a una funcion que se encargue procesar registro
        handleLogin(user)
        navigation('/places')
    }

    return (
        <div>
            <h2>Login</h2>
            <div className="col-4 mx-auto m-5">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>
                            Email
                        </Form.Label>
                        <Form.Control
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

export default Login;