import React from 'react';
import {
  Card, CardBody, CardImg,
  CardTitle, CardSubtitle, CardText, Modal,
  ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { Link } from "react-router-dom";
import user from '../img/user.png';

class TrainerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }
  

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    let { emp_id, emp_name, emp_department, emp_division,
          emp_email, emp_phone } = this.props.trainer;
    return (
    <div>
        {/* {this.state.accounts.map((account) => (
        <div> */}
          <Card className="text-center">
          <CardImg src={user}/>
              <CardBody>
                  <CardTitle>
                  <Link onClick={this.toggle}>{emp_name}</Link>
                  </CardTitle>
                  <CardSubtitle><b>{emp_division}</b></CardSubtitle>
                  <CardText>{emp_email}</CardText>
              </CardBody>
          </Card>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Tentang Trainer</ModalHeader>
            <ModalBody>
              <p>NIP : {emp_id}</p>
              <p>Nama Karyawan : {emp_name}</p>
              <p>Departemen Karyawan : {emp_department}</p>
              <p>Divisi Karyawan : {emp_division}</p>
              <p>Email Karyawan : {emp_email}</p>
              <p>No.HP Karyawan : {emp_phone}</p>
            </ModalBody>
          </Modal>
        {/* </div>
        ))}    */}
    </div>
    )
  }
};

export default TrainerCard;