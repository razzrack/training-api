import React from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route, Link, useParams, useRouteMatch} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonGroup, Col, Container, Jumbotron, Label,
  ListGroup, ListGroupItem, Form, FormGroup, Input, Row } from 'reactstrap';
import Home from './Home';
import Event from './Event';
import Auth from './Auth';
import NewData from './NewData';
import NewEvent from './NewEvent';
import DataVerif from './DataVerif';
import DetailEvent from './DetailEvent';
import EventCard from './cards/EventCard';
import About from './About';

class App extends React.Component {
  constructor(props) {
      super(props);
    }
  
  render() {
    return (
     <BrowserRouter>
      <div>
        <Navbar color="dark" light expand="md">
            <NavbarBrand><Link to="/eventlist">Pengajuan Pelatihan</Link></NavbarBrand>
            {/* <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar> */}
                <Nav className="ml-auto" navbar>
                    <NavItem className="mr-4">
                        <Link to="/eventlist">Daftar Pelatihan</Link>
                    </NavItem>
                    <NavItem className="mr-4">
                        <Link to="/newdata">Ajukan Pelatihan</Link>
                    </NavItem>
                    <NavItem className="mr-4">
                        <Link to="/about">Tentang Kami</Link>
                    </NavItem>
                    {/* <NavItem className="mr-4">
                        <Link onClick={this.toggle}>Login/Register</Link>
                    </NavItem> */}
                </Nav>
            {/* </Collapse> */}
        </Navbar>

        <hr />
        
        <Switch>
          <Route path={'/'} exact component={Event}/>
          <Route path={'/eventlist'} component={Event}/>
          <Route path={'/newdata'} component={NewData} />
          <Route path={'/verif'} component={DataVerif} />
          <Route path={'/newevent'} component={NewEvent} />
          <Route path={'/about'} component={About}/>
          <Route path={'/event/:id'} component={DetailEvent}/>
          <Route path={'/events/:id'} component={EventCard}/>
            {/* {/* <DetailEvents/>
          </Route> */}
          <Auth>
            {/* <Route path={'/homeauth'} component={HomeAuth} />
            <Route path={'/data'} component={Data} />
            <Route path={'/trainers'} component={TrainerAuth}/>
            <Route path={'/events'} component={EventAuth}/>
            <Route path={'/eventdet'} component={DetailEvent}/>
            <Route path={'/proposals'} component={Proposal}/>
            <Route path={'/trainees'} component={Trainee}/>
            <Route path={'/abouts'} component={AboutAuth}/>
            <Route path={'/profile'} component={Profil}/> */}
          </Auth>
        </Switch>
      </div>
     </BrowserRouter>
    )
  }
}

export default App;