import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';

class Breed extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                </Card.Body>
                <Card.Img variant="top" src="holder.js/100px180" />
            </Card>
        );
    }
}

export default Breed;