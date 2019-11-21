import React from 'react';
import axios from 'axios';
import { Button, ButtonGroup, Label,
    ListGroup, ListGroupItem, Form, FormGroup, Input } from 'reactstrap';
import { getJwt } from '../helpers/jwt';    
import HeaderAuth from './HeaderAuth';
import Footer from './Footer';

class Data extends React.Component {
    
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
            user_id: ""
        };
    }

    idChange(e) {
        this.setState({
            emp_id: e.target.value
        });
    }
    
    roleChange(e) {
        this.setState({
            emp_role: e.target.value
        });
    }
    
    nameChange(e) {
        this.setState({
            emp_name: e.target.value
        });
    }

    deptChange(e) {
        this.setState({
            emp_department: e.target.value
        });
    }

    divChange(e) {
        this.setState({
            emp_division: e.target.value
        });
    }

    genderChange(e) {
        this.setState({
            emp_gender: e.target.value
        });
    }

    birthPlaceChange(e) {
        this.setState({
            emp_birth_place: e.target.value
        });
    }

    birthDateChange(e) {
        this.setState({
            emp_birth_date: e.target.value
        });
    }

    emailChange(e) {
        this.setState({
            emp_email: e.target.value
        });
    }

    phoneChange(e) {
        this.setState({
            emp_phone: e.target.value
        });
    }

    submitData = (e) => {
        e.preventDefault();
        const headers = {
            'Authorization': getJwt()  
        };
        axios.post('http://localhost:3001/api/employees/4', {
            emp_id: this.state.emp_id,
            emp_role: this.state.emp_role,
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

        this.setState({
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
            user_id: ""
        });
    }

    render() {
        return (
            <div className="container">
            <HeaderAuth/>
            <ListGroup>
                <ListGroupItem>
                    <Label for="labelLogin">Tambah Data</Label>
                </ListGroupItem>
                <ListGroupItem>
                    <Form 
                    onSubmit={this.submitData}
                    >
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_id"
                                id="data-input"
                                placeholder="NIP"
                                value={this.state.emp_id}
                                onChange={this.idChange.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_role"
                                id="data-input"
                                placeholder="Peran Karyawan"
                                value={this.state.emp_role}
                                onChange={this.roleChange.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_name"
                                id="data-input"
                                placeholder="Nama Karyawan"
                                value={this.state.emp_name}
                                onChange={this.nameChange.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_department"
                                id="data-input"
                                placeholder="Departemen Karyawan"
                                value={this.state.emp_department}
                                onChange={this.deptChange.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_division"
                                id="data-input"
                                placeholder="Divisi Karyawan"
                                value={this.state.emp_division}
                                onChange={this.divChange.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_gender"
                                id="data-input"
                                placeholder="Jenis Kelamin Karyawan"
                                value={this.state.emp_gender}
                                onChange={this.genderChange.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_birth_place"
                                id="data-input"
                                placeholder="Tempat Lahir Karyawan"
                                value={this.state.emp_birth_place}
                                onChange={this.birthPlaceChange.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_birth_date"
                                id="data-input"
                                placeholder="Tanggal Lahir Karyawan"
                                value={this.state.emp_birth_date}
                                onChange={this.birthDateChange.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_email"
                                id="data-input"
                                placeholder="Email Karyawan"
                                value={this.state.emp_email}
                                onChange={this.emailChange.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_phone"
                                id="data-input"
                                placeholder="No HP Karyawan"
                                value={this.state.emp_phone}
                                onChange={this.phoneChange.bind(this)}
                            />
                        </FormGroup>
                        <Button
                            >Submit</Button>
                        </Form>
                </ListGroupItem>
            </ListGroup>
            <Footer/>
            </div>
      );
    }
}

export default Data;