import React, {Component} from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import {withRouter}  from 'react-router'

class MainPage extends Component {

    redirectToBreedsPage = () => {
        const { history } = this.props;
        if(history) history.push('/breeds');
    };


    render() {
        return (
            <Jumbotron>
                <h1>Dog Book</h1>
                <p>
                    Man's best friend!
                </p>
                <p>
                    <Button variant="primary" onClick={this.redirectToBreedsPage}>Woof!!</Button>
                </p>
            </Jumbotron>
        );
    }
}

export default withRouter(MainPage);