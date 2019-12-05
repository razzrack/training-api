import React from 'react';
import axios from 'axios';
import { FormGroup, Input, Container, Jumbotron, Row, Col,
    Button, Label,
    ListGroup, ListGroupItem, Form } from 'reactstrap';
import { getJwt } from '../helpers/jwt';    
import HeaderAuth from './HeaderAuth';
import Footer from './Footer';

class Proposal extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        event_name: "",
        event_type: "",
        prov_name: "",
        event_place: "",
        event_date: "",
        event_duration: "",
        prov_phone: "",
        prop_status: "",
        prop_date: "",
        app1_date: "",
        app2_date: "",
        app2_date: "",
        emp_id: "",
        error: ""
      };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/proposals')
        .then(res => res.data)
        .then((data) => {
            this.setState({ proposals: data})
            console.log(this.state.proposals)
        })
    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitProposal = (e) =>  {
        e.preventDefault();
        const url = "http://localhost:3001/api/proposals/5";
        const headers = {
            'Authorization': getJwt()  
        };
        axios.post(url, {
            event_name: this.state.event_name,
            event_type: this.state.event_type,
            prov_name: this.state.prov_name,
            event_place: this.state.event_place,
            event_date: this.state.event_date,
            event_duration: this.state.event_duration,
            prov_phone: this.state.prov_phone,
            prop_status: "Pending",
            prop_date: "2019-12-02",
            app1_date: "2019-12-02",
            app2_date: "2019-12-02",
            emp_id: 4
        },
        {headers:headers}).then(res => 
            console.log(res.data))
        // .catch(() => this.setState({
        //     error: true
        // }));
    }
  
    render() {
        const { error } = this.state;
        return (
            <div className="inner-container">
            <HeaderAuth/>
            <ListGroup>
                <ListGroupItem>
                    <Label for="labelLogin">Input Proposal Acara Pelatihan</Label>
                </ListGroupItem>
                <ListGroupItem>
                    <Form 
                    onSubmit={this.submitProposal.bind(this)}
                    >
                        <FormGroup>
                            <Input
                                type="text"
                                name="event_name"
                                id="proposal-input"
                                placeholder="Nama Pelatihan"
                                value={this.state.event_name}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="event_type"
                                id="proposal-input"
                                placeholder="Jenis Pelatihan"
                                value={this.state.event_type}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="prov_name"
                                id="proposal-input"
                                placeholder="Nama Provider Pelatihan"
                                value={this.state.prov_name}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="event_place"
                                id="proposal-input"
                                placeholder="Lokasi Pelatihan"
                                value={this.state.event_place}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="event_date"
                                id="proposal-input"
                                placeholder="Tanggal Pelatihan"
                                value={this.state.event_date}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="event_duration"
                                id="proposal-input"
                                placeholder="Durasi Pelatihan (jam)"
                                value={this.state.event_duration}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="prov_phone"
                                id="proposal-input"
                                placeholder="Nomor HP Karyawan"
                                value={this.state.prov_phone}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <Button
                            >Submit</Button>
                        </Form>
                        {error && <p>Terdapat fill kosong</p>}
                </ListGroupItem>
            </ListGroup>
            <Footer/>
            </div>
      );
    }  
}

export default Proposal;