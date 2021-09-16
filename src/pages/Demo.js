import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Col, Row } from 'react-bootstrap';

const Demo = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://reqres.in/api/users').then(function (response) {
            if (response.status === 200) {
                setData(response.data.data)
            }
        })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <div>
            <Row xs={2}>
                <Col>
                    {data && data.map((value) => {
                        return (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={value.avatar} />
                                <Card.Body>
                                    <Card.Title>{value.first_name} {value.last_name}</Card.Title>
                                    <Card.Text>{value.email}</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </Col>
            </Row>
        </div>
    )
}
export default Demo
