import React from 'react';
import {
  Card, CardBody, CardImg,
  CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { Link } from "react-router-dom";
import img1 from '../img/Influence-Generation-Forum-Maker-2019.jpg';

class EventCard extends React.Component {
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
    let { event_name, event_desc } = this.props.event;
    return (
    <div>
        <Card className="text-center">
    {/* <CardImg src={img1} height="250px" width="250px" /> */}
            <CardBody>
                <CardTitle>
                <Link onClick={this.toggle}>{event_name}</Link></CardTitle>
                {/* <CardSubtitle>{jenis_materi}</CardSubtitle> */}
            </CardBody>
        </Card>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Tentang Materi</ModalHeader>
          <ModalBody>
              <p>Nama Pelatihan : {event_name}</p>
              <p>Deskripsi : {event_desc}</p>
              {/* <p>Tanggal dan Waktu : {tanggal} {waktu}</p>
              <p>{deskripsi}</p> */}
            </ModalBody>
          <ModalFooter>
              <Link to="/trainees">Daftar Menjadi Peserta</Link>
          </ModalFooter>
        </Modal>
    </div>
    );
  }
};

export default EventCard;