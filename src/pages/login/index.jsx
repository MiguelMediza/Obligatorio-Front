import React, {useState, useEffect} from "react";
import Button  from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Example from '../../components/alerts'
const Login = ({handleLogin}) => {
    const navigation = useNavigate();
    const [alertSucces, setAlert] = useState(false);
    const [alertDesmiss, setAlertDesmiss] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    useEffect(() =>{
        if(localStorage.getItem('user-info')){
            navigation('/');
        }
    }, []);

    async function login(){
        let result = await fetch("https://history-hunters-api.onrender.com/users/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":'application/json'
            },
            body:JSON.stringify(user)

        });
        result = await result.json();
        if(result.status == 200){
            setAlert(true);
            localStorage.setItem("user-info",JSON.stringify(result.data.user))
        }
        else{
            setAlertDesmiss(true);
        }
        

    }


    const handleChange = (e) => {
        // cambiar o actualizar los datos del objeto user
        const value = e.target.value;
        const element = e.target.id;
        setUser({...user, [element]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
        handleLogin(user)
    }

    return (
        <div>
                    {alertSucces &&(
                                        <>
                                            <Example title={"Logueaste correctamente!"} mensaje={"Se te redirigirá al inicio"} estado ={true}/>
                                        </>
                                    )
                                }

                    {alertDesmiss &&(
                                        <>
                                            <Example title={"Error!!"} mensaje={"Error al loguearse, vuelva a intentar!"} estado ={false} lugar={"login"}/>
                                        </>
                                    )
                                }
            
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