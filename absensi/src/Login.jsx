import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Modal, ModalHeader, ModalBody } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { axsiosInstance } from './lib/axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style/login.css';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);

    const formValdiationSchema = z.object({
        email: z.string().min(3, 'Email harus memiliki minimal 3 karakter').email('Email tidak valid'),
        password: z.string().min(3, 'Password harus memiliki minimal 3 karakter')
    });

    //  FORM LOGIN  <<================================

    const form = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: zodResolver(formValdiationSchema)
    });

    //  FORM SIGN UP  <<=============================

    const formSignUp = useForm({
        defaultValues: {
            email: '',
            password: '',
            divisi: '',
            nama: '',
            alamat: '',
            role: 'produksi'
        }
    });

    useEffect(() => {
        openModal;
    }, [openModal]);

    //  POST LOGIN

    const loginSubmit = async (data) => {
        try {
            const result = await axsiosInstance.post('/auth/login',data);
            const statusCode = result.status;
            const token = result.data.access_token;
            navigate('/daftar-karyawan');

            if (statusCode === 200) {
                console.log(result.statusText);
                dispatch({
                    type: 'SET_TOKEN',
                    token: token
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    // POST SIGNUP ==>> daftar baru

    const signUpSubmit = async (data)=>{
        try {
            const result = await axsiosInstance.post('/auth/register',data)
          console.log(result)
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleModal = () => {
        setOpenModal(true);
    };

    const closeModal = () => {
        setOpenModal(false);
    };

    return (
        <div className="login w-100 text-center text-white" id="login" style={{ height: '100vh' }}>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                <div className="structure rounded border d-flex justify-content-center align-items-center" style={{ width: '50rem', height: '30rem' }}>
                    <Row className="justify-content-center text-center">
                        <Col md="auto" className="d-flex flex-column">
                            <h1>Login PT.ABI</h1>
                            <hr />
                            <br />
                            <div>
                                <form onSubmit={form.handleSubmit(loginSubmit)}>
                                    <p >Email</p>
                                    <Controller
                                        name="email"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <div className="form-group">
                                                <input
                                                    {...field}
                                                    type="email"
                                                    className={`form-control ${fieldState.error ? 'is-invalid' : ''}`}
                                                    placeholder="Enter your email"
                                                />
                                                {fieldState.error && (
                                                    <div className="invalid-feedback">
                                                        {fieldState.error.message}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    />
                                    <p>Password</p>
                                    <Controller
                                        name="password"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <div className="form-group">
                                                <input
                                                    {...field}
                                                    type="password"
                                                    className={`form-control ${fieldState.error ? 'is-invalid' : ''}`}
                                                    placeholder="Enter your Password"
                                                />
                                                {fieldState.error && (
                                                    <div className="invalid-feedback">
                                                        {fieldState.error.message}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    />
                                    <Button  type="submit" className="mt-3 button-login">Login</Button>
                                    <p>don't have an account yet?</p>
                                    <a href="#" onClick={handleModal}>SignUp</a>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Modal show={openModal} onHide={closeModal}>
                    <ModalHeader className="bg-black">
                        <h1 className="text-center text-white">SignUp - PT.ABI</h1>
                    </ModalHeader>
                    <ModalBody>
                        <form onSubmit={formSignUp.handleSubmit(signUpSubmit)}>
                            <div className="form-group">
                                <p className="p float-start">Email</p>
                                <Controller
                                    name="email"
                                    control={formSignUp.control}
                                    render={({ field }) => (
                                        <input className="form-control mb-2" {...field} placeholder="Enter Your Email" />
                                    )}
                                />
                            </div>
                            <div className="form-group">
                                <p className="p float-start">Password</p>
                                <Controller
                                    name="password"
                                    control={formSignUp.control}
                                    render={({ field }) => (
                                        <input className="form-control mb-2" {...field} placeholder="Enter Your Password" />
                                    )}
                                />
                            </div>
                            <div className="form-group">
                                <p className="p float-start">Divisi</p>
                                <Controller
                                    name="divisi"
                                    control={formSignUp.control}
                                    render={({ field }) => (
                                        <input className="form-control mb-2" {...field} placeholder="Enter Your Divisi" />
                                    )}
                                />
                            </div>
                            <div className="form-group">
                                <p className="p float-start">Name</p>
                                <Controller
                                    name="nama"
                                    control={formSignUp.control}
                                    render={({ field }) => (
                                        <input className="form-control mb-2" {...field} placeholder="Enter Your Name" />
                                    )}
                                />
                            </div>
                            <div className="form-group">
                                <p className="p float-start">Address</p>
                                <Controller
                                    name="alamat"
                                    control={formSignUp.control}
                                    render={({ field }) => (
                                        <input className="form-control mb-2" {...field} placeholder="Your Address" />
                                    )}
                                />
                            </div>
                            <div className="form-group">
                                <p className="p float-start">Role</p>
                                <Controller
                                    name="role"
                                    control={formSignUp.control}
                                    render={({ field }) => (
                                        <input className="form-control mb-2" {...field} placeholder="Position" disabled />
                                    )}
                                />
                            </div>
                            <Button className='' type="submit">Submit</Button>
                            
                            <Button onClick={closeModal} variant="dark">Close</Button>
                        </form>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    );
};

export default Login;
