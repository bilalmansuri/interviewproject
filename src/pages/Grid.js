import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const MyDemo = () => {
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61KmcwI8TFS._SL1200_.jpg" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    Vivo V21 5G (Sunset Dazzle, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71sxlhYhKWL._SL1500_.jpg" />
                <Card.Body>
                    <Card.Title>Redmi 9A </Card.Title>
                    <Card.Text>
                        Redmi 9A (Nature Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71f2I8cltBL._SL1500_.jpg" />
                <Card.Body>
                    <Card.Title>Samsung Galaxy Z Flip3 5G</Card.Title>
                    <Card.Text>
                    Samsung Galaxy Z Flip3 5G (Cream, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    )

}
export default MyDemo