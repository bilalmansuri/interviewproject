import { useFormik } from "formik";
import React, { useEffect, useState } from "react"
import { Alert, Container, Button, Form, FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { signInWithGoogle } from '../services/firebase';
import { auth } from "../services/firebase";
const Login = () => {
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (values) => {
            const errors = {};

            if (!values.email) {
                errors.email = "E-mail is Required";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
                errors.email = "E-mail is invalid";
            }

            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
            if (!values.password) {
                errors.password = 'Password is required';
            } else if (!passwordRegex.test(values.password)) {
                errors.password = "Must Contain 10 Characters, One Uppercase, One Lowercase, One Number and one special case Character";
            }
            return errors;
        },

        onSubmit: async (values) => {
            alert(JSON.stringify(values, null, 2));
            history.push('/dashboard')
        }

    });
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                history.push('/dashboard')
            }
        });
    }, []);
    return (
        <>
            <Container>
                <Form noValidate onSubmit={formik.handleSubmit}>
                    {message && <Alert variant='success' onClose={() => setMessage('')} dismissible>{message}</Alert>}
                    {error && <Alert variant='danger' onClose={() => setError('')} dismissible>{error}</Alert>}
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.email && (formik.errors.email)}
                        />
                        {error && (
                            <Form.Control.Feedback type="invalid">
                                {error}
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.password && (formik.errors.password)}
                        />
                        {error && (
                            <FormControl.Feedback type="invalid">
                                {error}
                            </FormControl.Feedback>
                        )}
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button variant="contained" color="secondary" onClick={signInWithGoogle} >
                        SignIn with google
                    </Button>
                </Form>

            </Container>
        </>
    )
}
export default Login