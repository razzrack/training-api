import React from 'react';
import axios from 'axios';
import { FormGroup, Input, Container, Jumbotron, Row, Col,
    Card, CardHeader, Modal,
    ModalHeader, ModalBody, ModalFooter,
    CardBody, CardTitle, CardText,
    Button, Label,
    ListGroup, ListGroupItem, Form } from 'reactstrap';
import { getJwt } from '../helpers/jwt';
import HeaderAuth from './HeaderAuth';
import Footer from './Footer';
import ProfileCard from './cards/ProfileCard';


class Profil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emp_id: "",
            emp_role: "",
            emp_name: "",
            emp_department: "",
            emp_division: "",
            emp_gender: "",
            emp_birth_place: "",
            emp_birth_date: "",
            emp_email: "",
            emp_phone: "",
            user_id: "",
            employee: []
        };
    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitData = (e) => {
        e.preventDefault();
        const headers = {
            'Authorization': getJwt()  
        };
        axios.post('http://localhost:3001/api/employees/4', {
            emp_id: this.state.emp_id,
            emp_role: "Peserta",
            emp_name: this.state.emp_name,
            emp_department: this.state.emp_department,
            emp_division: this.state.emp_division,
            emp_gender: this.state.emp_gender,
            emp_birth_place: this.state.emp_birth_place,
            emp_birth_date: this.state.emp_birth_date,
            emp_email: this.state.emp_email,
            emp_phone: this.state.emp_phone,
        },
        {headers:headers}).then(res => 
            console.log(res.data))
        // .catch(() => this.setState({
        //     error: true
        // }));

    }

    // submitEvent = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:3001/api/events', {
    //         event_name: this.state.event_name,
    //         event_desc: this.state.event_desc
    //     }).then(res => 
    //         console.log(res.data))
    //     .catch(() => this.setState({
    //         error: true
    //     }));

    //     this.setState({
    //         event_name: "",
    //         event_desc: ""
    //     });
    // }

    render() {
        let profileCard = this.state.employee.map(pela => {
            return (
                <Col>
                    <ProfileCard pela={pela} />
                </Col>
            )
        })
        return (
            <div className="inner-container">
            <HeaderAuth/>
                <Row>
                    <Col sm={3}>
                        {profileCard}
                    </Col>
                    <Col md={9}>
                        <Row className="ml-5">
                            <Col>
                                <h3>Data Pribadi</h3>
                                <span>Isi data diri anda untuk pengguna baru atau ubah data diri untuk pengguna lama</span>
                <Form 
                    onSubmit={this.submitData.bind(this)}
                    >
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_id"
                                id="data-input"
                                placeholder="NIP"
                                value={this.state.emp_id}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_role"
                                id="data-input"
                                placeholder="Peran Karyawan"
                                value="Peserta"
                                onChange={this.change.bind(this)}
                            disabled />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_name"
                                id="data-input"
                                placeholder="Nama Karyawan"
                                value={this.state.emp_name}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_department"
                                id="data-input"
                                placeholder="Departemen Karyawan"
                                value={this.state.emp_department}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_division"
                                id="data-input"
                                placeholder="Divisi Karyawan"
                                value={this.state.emp_division}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_gender"
                                id="data-input"
                                placeholder="Jenis Kelamin Karyawan"
                                value={this.state.emp_gender}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_birth_place"
                                id="data-input"
                                placeholder="Tempat Lahir Karyawan"
                                value={this.state.emp_birth_place}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_birth_date"
                                id="data-input"
                                placeholder="Tanggal Lahir Karyawan"
                                value={this.state.emp_birth_date}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_email"
                                id="data-input"
                                placeholder="Email Karyawan"
                                value={this.state.emp_email}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_phone"
                                id="data-input"
                                placeholder="No HP Karyawan"
                                value={this.state.emp_phone}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <Button
                            >Submit</Button>
                        </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="ml-5 mt-2">
                    {/* <Jumbotron fluid>
                        <Container fluid>
                        <Card>
                        <CardBody className="text-center">
                        
                    
                        </CardBody>                                                
                    </Card>
                    </Container>
                </Jumbotron> */}
                </Row>                
            <Footer/>
        </div>
      );
    }
}
export default Profil;