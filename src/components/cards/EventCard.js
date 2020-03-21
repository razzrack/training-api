import React from 'react';
import axios from 'axios';
import {
  Button, Card, CardBody, CardImg,
  CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { getJwt } from '../../helpers/jwt'; 
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";

class EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        redirect: false,
        events: []
      };
  
      this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  // btnDetail = (e) => {
  //   return(
  //     <div>
  //       <Redirect to="/event/1"></Redirect>
  //     </div>
  //   )
  // }
  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   })
  // }

  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to='/event/1' />
  //   }
  // }

  // btnSubmit = (e) =>{
  //   let id = "id";
  //   localStorage.setItem(id, this.state.id);
    
    
  //   // e.preventDefault();
  //   // const id = this.props.match.params.id
  //   // const url = "http://localhost:3001/api/events/";
  //   // const headers = {
  //   //     'Authorization': getJwt()  
  //   // };
  //   // axios.get(url, {
  //   //   params: {
  //   //     id: this.state.id
  //   //   }
  //   // }
  //   // // {headers:headers}
  //   // ).then(res => console.log(res.data))
  //   // // this.setState({
  //   // //     submission_status: "Tolak",
  //   // //     approve_date: new Date()
  //   // // });
  // }

  render() {
    let { id, event_name, event_type, provider_name, event_place,
      event_date_start,event_date_end,event_duration,event_fee,event_status,event_desc } = this.props.event;
    return (
    <div>
        <Card className="text-center">
    {/* <CardImg src={img1} height="250px" width="250px" /> */}
            <CardBody>
                <CardTitle>
                <Link onClick={this.toggle}>{event_name}</Link></CardTitle>
                <CardSubtitle>{event_type}</CardSubtitle>
                <CardSubtitle>{provider_name}</CardSubtitle>
            </CardBody>
        </Card>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Detail Pelatihan</ModalHeader>
          <ModalBody>
              <p>Nama Pelatihan : {event_name}</p>
              <p>Tipe Pelatihan : {event_type}</p>
              <p>Provider : {provider_name}</p>
              <p>Lokasi : {event_place}</p>
              <p>Tanggal : {event_date_start} - {event_date_end}</p>
              <p>Durasi : {event_duration}</p>
              <p>Biaya : {event_fee}</p>
              <p>Status : {event_status}</p>
              <p>Deskripsi: {event_desc}</p>
            </ModalBody>
          <ModalFooter>
            <Redirect to="/event/1">Ajukan</Redirect>
            {/* <Button onClick={this.setRedirect}>Ajukan</Button> */}
          </ModalFooter>
        </Modal>
    </div>
    );
  }
};

export default EventCard;