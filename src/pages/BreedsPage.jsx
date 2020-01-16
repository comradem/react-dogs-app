import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from 'react-bootstrap/FormControl';
import Button from "react-bootstrap/Button";
import Breed from "../components/Breed";
import {withRouter} from 'react-router'
import axios from 'axios';
import '../utils/rest-utils'

class BreedsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            breeds: [],
            specificClicked: false
        }
    }


    updateGallery = async () => {
        //get all breeds names
        const resp = await axios.get(process.env.REACT_APP_ALL_DOGS);
        let ans = [];
        let arr = [];
        if (resp.data.status === 'success') {
            arr = Object.keys(resp.data.message);
            const doggies = arr.map(item => axios.get(`${process.env.REACT_APP_DOGS_API}${item}${process.env.REACT_APP_DOGS_IMAGES_RND}`));
            ans = await Promise.all(doggies);
        }
        this.setState({
            data: ans,
            breeds: arr,
            specificClicked: false
        })
    };


    openSpecific = async (event) => {
        const { history } = this.props;
        let image = event.target.getAttribute('src');
        console.log(image);
        if(history) this.props.history.push({
            pathname: '/breed',
            state: {link:event.target.getAttribute('src')}});
    };

    render() {

        let arr =[];
        arr = this.state.data.map((item, index) => {
            return <Breed key={index} image={item.data.message} title={item.data.message.split("/")[4]}
                          clicked={this.openSpecific}/>
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
                <Row>
                    {arr}
                </Row>
            </Container>
        );
    }
}

export default withRouter(BreedsPage);