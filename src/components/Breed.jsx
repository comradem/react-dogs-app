import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';

class Breed extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.breed}</Card.Title>
                </Card.Body>
                <Card.Img variant="top" src={this.props.breed} />
            </Card>
        );
    }
}

export default Breed;