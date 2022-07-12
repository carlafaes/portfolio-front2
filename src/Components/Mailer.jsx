import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Grid from '@mui/material/Grid';
import { motion, useViewportScroll, useTransform } from "framer-motion";



//utils
import contact from '../utils/contact.png';
//probando terminal
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Mailer(initial = {}) {
    const [errors, setErrors] = useState({}) //estado local que arranca con un obj vacio
    const [inputForm, setInputForm] = useState({
        user_name: '',
        user_email: '',
        user_message: ''
    })
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [2, 0.2], [0, 1.5]);




    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_stu3969', 'template_lejafpj', e.target, 'H0NguBXqHykea033Q')
            .then(response => {
                message();
                setInputForm({
                    user_name: '',
                    user_email: '',
                    user_message: ''
                })
            })
            .catch(error => messageError())
    }

    const message = () => {
        toast.success('Message send succesfully!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const messageError = () => {
        toast.error('Ups!something is wrong, please try again later', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }



    return (
        <div >

            <Grid container
                spacing={8}
                direction={"row"}
                justifyContent="center"
                alignItems="center">
                <Grid item xs={10} md={4} xl={4}>
                    <Form onSubmit={sendEmail}>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <InputGroup className="mb-3" name='user_name'>
                                <InputGroup.Text>Nombre</InputGroup.Text>
                                <Form.Control
                                    placeholder="Ingresa tu nombre"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    required
                                />
                            </InputGroup >
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Email</InputGroup.Text>
                                <Form.Control 
                                type="email" 
                                placeholder="Ingresa tu email" 
                                name='user_email'
                                required />
                                <InputGroup>
                                    <Form.Text className="text-muted">
                                        No se compartira tu email con nadie.
                                    </Form.Text>
                                </InputGroup>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text>Tu mensaje</InputGroup.Text>
                                <Form.Control 
                                as="textarea" 
                                aria-label="With textarea" 
                                name='user_message'
                                required />
                            </InputGroup>
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Grid>
                <Grid item xs={10} md={4} xl={4}>
                    <motion.div
                        className="container"
                        style={{
                            scale
                        }}
                    >
                        <motion.div
                            className="item"
                            style={{
                                scaleY: scrollYProgress
                            }}
                        />
                        <img src={contact} alt="contact" className="img-fluid" />
                    </motion.div>

                </Grid>
            </Grid>
            <ToastContainer
                theme='dark'
            />
        </div>
    )
}