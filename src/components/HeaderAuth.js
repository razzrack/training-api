import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Login from "./Login";

class HeaderAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          modal: false,
          username: localStorage.getItem("username")
        };

        this.toggle = this.toggle.bind(this);
      }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
      }

      remove(){
            localStorage.removeItem('jwt');
            localStorage.removeItem('username');
      }

    render() {
        return (
            <div>
                <Navbar color="dark" light expand="md">
                    <NavbarBrand><Link to="/homeauth">Pelatihan</Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="mr-4">
                                <Link to="/trainers">Trainer</Link>
                            </NavItem>
                            <NavItem className="mr-4">
                                <Link to="/events">Event</Link>
                            </NavItem>
                            <NavItem className="mr-4">
                                <Link to="/abouts">About</Link>
                            </NavItem>
                            <NavItem className="mr-4">
                                <Link to="/profile">Halo, {this.state.username} </Link>
                            </NavItem>
                            <NavItem className="mr-4">
                                <Link to="/" onClick={this.remove}>Logout</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default HeaderAuth;