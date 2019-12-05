import React from 'react';
import axios from 'axios';
import { Button, ButtonGroup, Label,
    ListGroup, ListGroupItem, Form, FormGroup, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { getJwt } from '../helpers/jwt';    
import HeaderAuth from './HeaderAuth';
import Footer from './Footer';

class NewData extends React.Component {

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
        users: [],
        error: ""
      };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/employees')
        .then(res => res.data)
        .then((data) => {
            this.setState({ users: data})
            console.log(this.state.users)
        })
    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitData = (e) =>  {
        e.preventDefault();
        const url = "http://localhost:3001/api/employees/";
        const headers = {
            'Authorization': getJwt()  
        };
        axios.post(url+ '2', {
            emp_id: this.state.emp_id,
            emp_role: this.state.emp_role,
            emp_name: this.state.emp_name,
            emp_department: this.state.emp_department,
            emp_division: this.state.emp_division,
            emp_gender: this.state.emp_gender,
            emp_birth_place: this.state.emp_birth_place,
            emp_birth_date: this.state.emp_birth_date,
            emp_email: this.state.emp_email,
            emp_phone: this.state.emp_phone
        },
        {headers:headers})
        .then(res => console.log(res.data))
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
            <div className="inner-container">
            <HeaderAuth/>
            <ListGroup>
                <ListGroupItem>
                    <Label for="labelLogin">Input Data Pegawai Baru</Label>
                </ListGroupItem>
                <ListGroupItem>
                    <Form 
                    onSubmit={this.submitData.bind(this)}
                    >
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_id"
                                id="employee-input"
                                placeholder="Nomor Induk Pegawai"
                                value={this.state.emp_id}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_role"
                                id="employee-input"
                                placeholder="Peran Karyawan"
                                value={this.state.emp_role}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_name"
                                id="employee-input"
                                placeholder="Nama Lengkap Karyawan"
                                value={this.state.emp_name}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_department"
                                id="employee-input"
                                placeholder="Departemen Karyawan"
                                value={this.state.emp_department}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_division"
                                id="employee-input"
                                placeholder="Divisi Karyawan"
                                value={this.state.emp_division}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_gender"
                                id="employee-input"
                                placeholder="Jenis Kelamin Karyawan"
                                value={this.state.emp_gender}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_birth_place"
                                id="employee-input"
                                placeholder="Tempat Lahir Karyawan"
                                value={this.state.emp_birth_place}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_birth_date"
                                id="employee-input"
                                placeholder="Tanggal Lahir Karyawan"
                                value={this.state.emp_birth_date}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_email"
                                id="employee-input"
                                placeholder="Email Karyawan"
                                value={this.state.emp_email}
                                onChange={this.change.bind(this)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="emp_phone"
                                id="employee-input"
                                placeholder="No HP Karyawan"
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

export default NewData;