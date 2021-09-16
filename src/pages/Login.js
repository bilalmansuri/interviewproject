import { useFormik } from "formik";
import React, { useEffect } from "react"
import { Container, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Textbox } from "../formik/textbox";
import { signInWithGoogle } from '../services/firebase';
import * as Yup from 'yup';
import { auth } from "../services/firebase";

const ValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    subject: Yup.string()
        .min(10, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    message: Yup.string()
        .min(10, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
});

const ContactForm = () => {
    const history = useHistory()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: ValidationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
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
                    <Textbox
                        name="name"
                        label="Name"
                        value={formik.values.name}
                        handleChange={formik.handleChange}
                        error={formik.touched.name && formik.errors.name}
                    />
                    <Textbox
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        handleChange={formik.handleChange}
                        error={formik.touched.email && formik.errors.email}

                    />
                    <Textbox
                        name="subject"
                        label="Subject"
                        value={formik.values.subject}
                        handleChange={formik.handleChange}
                        error={formik.touched.subject && formik.errors.subject} />
                    <Textbox
                        name="message"
                        label="Message"
                        value={formik.values.message}
                        handleChange={formik.handleChange}
                        error={formik.touched.message && formik.errors.message}
                        as="textarea"
                        rows={3}
                    />
                    <Button variant="primary" type="submit">
                        Send Message
                    </Button>

                    <Button variant="primary" onClick={signInWithGoogle} >
                        SignIn with google
                    </Button>
                </Form>

            </Container>
        </>
    );
};
export default ContactForm
