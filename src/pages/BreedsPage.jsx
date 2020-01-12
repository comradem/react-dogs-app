import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from 'react-bootstrap/FormControl';
import Button from "react-bootstrap/Button";
import Breed from "../components/Breed";
import {withRouter} from 'react-router'

class BreedsPage extends Component {

    updateGallery = () => {

    };

    render() {
        return (
            <Container>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/">Dog Book</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/breeds">Breeds</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search for breed..."
                        aria-label="Search for breed..."
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={this.updateGallery}>Update images</Button>
                    </InputGroup.Append>
                </InputGroup>
                <div>
                    <Breed/>
                    <Breed/>
                    <Breed/>
                    <Breed/>
                    <Breed/>
                    <Breed/>
                </div>
            </Container>
        );
    }
}

export default withRouter(BreedsPage);