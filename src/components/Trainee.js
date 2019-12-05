import React from 'react';
import axios from 'axios';
import { FormGroup, Input, Container, Jumbotron, Row, Col,
    Button, Label,
    ListGroup, ListGroupItem, Form } from 'reactstrap';
import { getJwt } from '../helpers/jwt';    
import HeaderAuth from './HeaderAuth';
import Footer from './Footer';

class Trainee extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        emp_id: "",
        emp_name: "",
        emp_department: "",
        emp_division: "",
        event_name: "",
        emp_email: "",
        emp_phone: "",
        emp_status: "",
        trainees: [],
        error: ""
      };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/trainees')
        .then(res => res.data)
        .then((data) => {
            this.setState({ trainees: data})
            console.log(this.state.trainees)
        })
    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitTrainee = (e) =>  {
        e.preventDefault();
        const url = "http://localhost:3001/api/trainees/";
        axios.post(url, {
            emp_id: this.state.emp_id,
            emp_name: this.state.emp_name,
            emp_department: this.state.emp_department,
            emp_division: this.state.emp_division,
            event_name: this.state.event_name,
            emp_email: this.state.emp_email,
            emp_phone: this.state.emp_phone,
            emp_status: "Terdaftar"
        })
    }
  
    render() {
        const { error } = this.state;
        return (
            <div className="inner-container">
            <HeaderAuth/>
            <ListGroup>
                <ListGroupItem>
                    <Label for="labelLogin">Input Form Peserta Pelatihan</Label>
                </ListGroupItem>
                <ListGroupItem>
                    <Form 
                    onSubmit={this.submitTrainee.bind(this)}
                    >
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_id"
                                id="trainee-input"
                                placeholder="Nomor Induk Pegawai"
                                value={this.state.emp_id}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_name"
                                id="trainee-input"
                                placeholder="Nama Karyawan"
                                value={this.state.emp_name}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_department"
                                id="trainee-input"
                                placeholder="Departemen Karyawan"
                                value={this.state.emp_department}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_division"
                                id="trainee-input"
                                placeholder="Divisi Karyawan"
                                value={this.state.emp_division}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="event_name"
                                id="trainee-input"
                                placeholder="Nama Acara Pelatihan"
                                value={this.state.event_name}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_email"
                                id="trainee-input"
                                placeholder="Email Karyawan"
                                value={this.state.emp_email}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_phone"
                                id="trainee-input"
                                placeholder="Nomor HP Karyawan"
                                value={this.state.emp_phone}
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

export default Trainee;