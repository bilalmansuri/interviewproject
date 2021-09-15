import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { auth } from "../services/firebase";
import { logOut } from '../services/firebase';

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
            <h1>
                Welcome to {user?.displayName}
            </h1>
            <Button variant="primary" onClick={logOut}>Logout</Button>

        </>
    )
}
export default Dashboard