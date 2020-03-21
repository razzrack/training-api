import React from 'react';
import axios from 'axios';
import { FormGroup, Input, Container, Jumbotron, Row, Col,
    Card, CardHeader, CardImg, Modal,
    ModalHeader, ModalBody, ModalFooter,
    CardBody, CardTitle, CardText,
    Button, Label,
    ListGroup, ListGroupItem, Form } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';
import MateriCard from './cards/EventCard';
import TrainingImg from './img/Training.jpg';
import ProfileCard from './cards/ProfileCard';
import { getJwt } from '../helpers/jwt'; 

class DetailEvent extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        submission_date: "2020-02-20",
        division_name: "",
        event_name: "",
        event_type: "",
        provider_name: "",
        event_place: "",
        event_date_start: "",
        event_date_end: "",
        event_duration: "",
        division_phone: "",
        submission_status: "Menunggu Konfirmasi",
        approve_date: "",
        events: [],
        error: ""
      };
      
    }
  
    componentDidMount() {
      const id = this.props.match.params.id
      const url = `http://localhost:3001/api/events/${id}`;
      axios.get(url)
      .then(res => res.data)
      .then((data) => {
          this.setState({ events: data})
          console.log(this.state.events)
      })
    }
  
    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitData = (e) =>  {
        e.preventDefault();
        const url = "http://localhost:3001/api/submissions";
        const headers = {
            'Authorization': getJwt()  
        };
        axios.post(url, {
            submission_date: "2020-02-20",
            division_name: this.state.events.division_name,
            event_name: this.state.events.event_name,
            event_type: this.state.events.event_type,
            provider_name: this.state.events.provider_name,
            event_place: this.state.events.event_place,
            event_date_start: this.state.events.event_date_start,
            event_date_end: this.state.events.event_date_end,
            event_duration: this.state.events.event_duration,
            division_phone: this.state.events.division_phone,
            submission_status: "Menunggu Konfirmasi"
        },
        // {headers:headers}
        ).then(res => console.log(res.data))
        // .catch(() => this.setState({
        //     error: true
        // }));
    }

    render() {
      const { error } = this.state;
      // if(this.state.loggedIn){
      //     return <Redirect to="/homeauth" />
      // }
  
    return (
      <div>
        <Jumbotron fluid>
            <Container fluid>
            <Row>
                <Col md={3}>
                </Col>
                <Col md={6}>
                <ListGroup>
                    <ListGroupItem>
                        <Label for="labelLogin">Detail Event</Label>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Form 
                        onSubmit={this.submitData.bind(this)}
                        >
                                    {/* <FormGroup>
                                        <Label for="submission_date">Tanggal Pengajuan</Label>
                                        <Input
                                            type="text"
                                            name="submission_date"
                                            id="submission-input"
                                            value={this.state.submission_date}
                                            onChange={this.change.bind(this)}
                                        />
                                    </FormGroup> */}
                                    <FormGroup>
                                    <Label for="division_name">Nama Divisi</Label>
                                        <Input
                                            type="text"
                                            name="division_name"
                                            id="submission-input"
                                            placeholder="Nama Divisi"
                                            value={this.state.events.division_name}
                                            onChange={this.change.bind(this)}
                                        disabled/>
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="event_name">Nama Pelatihan</Label>
                                        <Input
                                            type="text"
                                            name="event_name"
                                            id="submission-input"
                                            placeholder="Nama Pelatihan"
                                            value={this.state.events.event_name}
                                            onChange={this.change.bind(this)}
                                            disabled/>
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="event_type">Tipe Pelatihan</Label>
                                        <Input
                                            type="text"
                                            name="event_type"
                                            id="submission-input"
                                            placeholder="Tipe Pelatihan"
                                            value={this.state.events.event_type}
                                            onChange={this.change.bind(this)}
                                        disabled/>
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="provider_name">Nama Provider</Label>
                                        <Input
                                            type="text"
                                            name="provider_name"
                                            id="submission-input"
                                            placeholder="Nama Provider"
                                            value={this.state.events.provider_name}
                                            onChange={this.change.bind(this)}
                                        disabled/>
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="event_place">Lokasi Pelatihan</Label>
                                        <Input
                                            type="text"
                                            name="event_place"
                                            id="submission-input"
                                            placeholder="Lokasi Pelatihan"
                                            value={this.state.events.event_place}
                                            onChange={this.change.bind(this)}
                                        disabled/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="event_date_start">Tanggal Mulai</Label>
                                        <Input
                                            type="date"
                                            name="event_date_start"
                                            id="submission-input"
                                            placeholder="yyyy-mm-dd"
                                            value={this.state.events.event_date_start}
                                            onChange={this.change.bind(this)}
                                        disabled/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="event_date_end">Tanggal Selesai</Label>
                                        <Input
                                            type="date"
                                            name="event_date_end"
                                            id="submission-input"
                                            placeholder="yyyy-mm-dd"
                                            value={this.state.events.event_date_end}
                                            onChange={this.change.bind(this)}
                                        disabled/>
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="event_duration">Durasi Pelatihan</Label>
                                        <Input
                                            type="number"
                                            name="event_duration"
                                            id="submission-input"
                                            placeholder="Durasi Pelatihan"
                                            value={this.state.events.event_duration}
                                            onChange={this.change.bind(this)}
                                        disabled/>
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="division_phone">Contact Person Divisi</Label>
                                        <Input
                                            type="text"
                                            name="division_phone"
                                            id="submission-input"
                                            placeholder="Contact Person Divisi"
                                            value={this.state.events.division_phone}
                                            onChange={this.change.bind(this)}
                                        disabled/>
                                    </FormGroup>
                                    {/* <FormGroup>
                                    <Label for="submission_status">Status</Label>
                                        <Input
                                            type="text"
                                            name="submission_status"
                                            id="submission-input"
                                            placeholder="Status"
                                            value={this.state.submission_status}
                                            onChange={this.change.bind(this)}
                                        />
                                    </FormGroup> */}
                            <Button
                                >Submit</Button>
                            </Form>
                            {error && <p>Terdapat fill kosong</p>}
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col md={3}></Col>
            </Row>
            </Container>
        </Jumbotron>
      </div>
    );
    }
  }

export default DetailEvent;