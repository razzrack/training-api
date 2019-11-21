import React from 'react';
import axios from 'axios';
import {
    Card, CardHeader,
    CardBody, CardTitle, CardText, Jumbotron, Container
  } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { getJwt } from '../helpers/jwt';
import HeaderAuth from './HeaderAuth';
import Footer from './Footer';

class HomeAuth extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [],
        employees: []
      }
    }

    componentDidMount() {
        axios.all([
            axios.get('http://localhost:3001/api/users',
                {headers: {
                    'Authorization': getJwt()
                }}),
            axios.get('http://localhost:3001/api/employees')
        ])
        .then(data => {
            this.setState({
                users: data[0],
                employees: data[1]
            })
            console.log(this.state.users)
            console.log(this.state.employees)
        });
    }
  
    render() {
        return (
            <div className="inner-container">
                <HeaderAuth/>
                <Jumbotron fluid>
                    <Container fluid>
                        Hello Auth!!
                    </Container>
                </Jumbotron>
                <Footer/>
            </div>
      );
    }  
}

export default HomeAuth;