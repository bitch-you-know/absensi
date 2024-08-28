import { Col, InputGroup, Row, Form, Button } from "react-bootstrap";
import "./style/login.css"

const Login = () => {
    return (
        <div className="login w-100 text-center  text-white"  id="login" style={{ height: "100vh" }}>
            
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                
                <div className="structure  rounded   border d-flex justify-content-center align-items-center" style={{width:"50rem" , height:"30rem"}}>
                    <Row className="justify-content-center text-center ">

                        <Col md="auto">
                            <h1>Login PT.ABI</h1>
                            <br />
                            <br />
                           
                            <Form >
                                <Form.Group className="mb-3 intput-card " controlId="formBasicEmail">
                                   
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    
                                </Form.Group>

                                <Form.Group className="mb-3 intput-card" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>


                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Login;
