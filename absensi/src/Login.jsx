import { Col, Row, Button } from "react-bootstrap";
import "./style/login.css";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { axsiosInstance } from "./lib/axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch =useDispatch()
    const navigate =useNavigate()

    const formValdiationSchema = z.object({
        email: z.string().min(3, "Email harus memiliki minimal 3 karakter").email("Email tidak valid"),
        password: z.string().min(3, "Password harus memiliki minimal 3 karakter")
    });

    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(formValdiationSchema)
    });

    const loginSubmit = async (data) => {
        try {
            const result = await axsiosInstance.post("/auth/login", data);
            const statusCode = result.status;
            const token = result.data.access_token;
            navigate("/daftar-karyawan")

            if (statusCode === 200) {
                console.log(result.statusText);
                dispatch({
                    type:"SET_TOKEN",token:token
                })
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="login w-100 text-center text-white" id="login" style={{ height: "100vh" }}>

            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "100%" }}>

                <div className="structure rounded border d-flex justify-content-center align-items-center" style={{ width: "50rem", height: "30rem" }}>
                    <Row className="justify-content-center text-center">

                        <Col md="auto" className="d-flex flex-column">
                            <h1>Login PT.ABI</h1>
                            <br />

                            <div>
                                <form onSubmit={form.handleSubmit(loginSubmit)}>
                                    <p>Email</p>
                                    <Controller
                                        name="email"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <input
                                                    {...field}
                                                    type="email"
                                                    className={`d-block ${fieldState.error ? 'is-invalid' : ''}`}
                                                    style={{ width: "28rem" }}
                                                />
                                                {fieldState.error && (
                                                    <small className="text-danger">
                                                        {fieldState.error.message}
                                                    </small>
                                                )}
                                            </>
                                        )}
                                    />
                                    <p>Password</p>
                                    <Controller
                                        name="password"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <input
                                                    {...field}
                                                    type="password"
                                                    className={`d-block ${fieldState.error ? 'is-invalid' : ''}`}
                                                    style={{ width: "28rem" }}
                                                />
                                                {fieldState.error && (
                                                    <small className="text-danger">
                                                        {fieldState.error.message}
                                                    </small>
                                                )}
                                            </>
                                        )}
                                    />

                                    <Button type="submit" className="mt-3">Submit</Button>
                                </form>
                            </div>

                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Login;
