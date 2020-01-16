import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Breed from "../components/Breed";

class BreedPage extends Component {

    render() {
        console.log(this.props.location.state);
        let arr = [<Breed></Breed>];
        return (
            <Container>
                {arr}
            </Container>
        );
    }
}

export default BreedPage;