import React from 'react';
import axios from 'axios';
import { FormGroup, Input, Container, Jumbotron, Row, Col,
    Card, CardHeader, CardImg, Modal,
    ModalHeader, ModalBody, ModalFooter,
    CardBody, CardTitle, CardText,
    Button, Label,
    ListGroup, ListGroupItem, Form } from 'reactstrap';
import HeaderAuth from './HeaderAuth';
import Footer from './Footer';
import MateriCard from './cards/EventCard';
import TrainingImg from './img/Training.jpg';
import ProfileCard from './cards/ProfileCard';

class DetailEvent extends React.Component {
    constructor(){
        super();
        this.state = {
            events: []
        }   
    }

    componentDidMount() {
        const url = 'http://localhost:3001/api/events/'
        axios.get(url).then(response => response.data)
        .then((data) => {
            this.setState({ events: data })
            console.log(this.state.events)
        })
    }

    render() {
        // let materiCard = this.state.events.map(event => {
        //     return (
        //         <Col>
        //             <MateriCard event={event} />
        //         </Col>
        //     )
        // })
        // let profileCard = this.state.pelatih.map(pela => {
        //     return (
        //         <Col>
        //             <ProfileCard pela={pela} />
        //         </Col>
        //     )
        // })
        return (
            <div>
                <HeaderAuth/>
                <Jumbotron fluid>
                    <Container fluid>
                    <Row>
                            <Col md={9}>
                                <Row className="ml-5">
                                    <Col>
                                        <h3>Acara Pelatihan</h3>
                                    </Col>
                                </Row>
                                <Row form className="ml-4 mt-2">
                                    <Col md={4}>
                                        {this.state.events.map((event) => (
                                            <Card>
                                                <CardImg top width="100%" src={TrainingImg} alt="Card image cap" />
                                                <CardBody>
                                                <CardTitle>{event.event_name}</CardTitle>
                                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                                <CardText>
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </CardText>
                                                </CardBody>
                                            </Card>
                                        ))}
                                    </Col>
                                </Row>
                                <Row className="ml-5 mt-2">
                                    
                                </Row>
                            </Col>
                            <Col sm={3}>
                                {/* {profileCard} */}
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Footer/>
            </div>
        )
    }
};

export default DetailEvent;