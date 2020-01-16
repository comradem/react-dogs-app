import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';

class Breed extends Component {

    render() {
        return (
            <Card style={{ width: '18rem' }} onClick={this.props.clicked}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                </Card.Body>
                <Card.Img variant="top" src={this.props.image} />
            </Card>
        );
    }
}

export default Breed;