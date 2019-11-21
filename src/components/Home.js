import React from 'react';
import {
    Card, CardHeader,
    CardBody, CardTitle, CardText, Jumbotron, Container
  } from 'reactstrap';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <Jumbotron fluid>
                <Container fluid>
                    Hello!!
                </Container>
            </Jumbotron>
        </div>
    )
};

export default Home;