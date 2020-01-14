import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from 'react-bootstrap/FormControl';
import Button from "react-bootstrap/Button";
import Breed from "../components/Breed";
import {withRouter} from 'react-router'
import axios from 'axios';
import '../utils/rest-utils'
import {test, test2} from "../utils/rest-utils";

class BreedsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            allBreeds: []
        }
    }


    updateGallery = async () => {
        const resp = await axios.get(process.env.REACT_APP_ALL_DOGS);
        let ans = [];
        if (resp.data.status === 'success') {
            const arr = Object.keys(resp.data.message);
            const doggies = arr.map(item => axios.get(`${process.env.REACT_APP_DOGS_API}${item}${process.env.REACT_APP_DOGS_IMAGES_RND}`));
            ans = await Promise.all(doggies);
        }
        this.setState({allBreeds: ans})
    };


    render() {
        let arr = this.state.allBreeds.map(item => {
            console.log(item);
            // <Breed data={item}/>
        });
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
                    {arr}
                </div>
            </Container>
        );
    }
}

export default withRouter(BreedsPage);