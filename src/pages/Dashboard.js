import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { auth } from "../services/firebase";
import { logOut } from '../services/firebase';
import Demo from "./Demo";
import MyGrid from "./Grid";

const Dashboard = () => {
    const history = useHistory()
    const [user, setuser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const { displayName, email } = user;
                setuser({
                    displayName,
                    email,
                });
            } else {
                history.push('/login')
            }
        });
    }, []);
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        Welcome to {user?.displayName}
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={logOut}>Logout</Button>
                    </Col>
                </Row>
                <MyGrid/>
                <Demo />
            </Container>
        </>
    )
}
export default Dashboard