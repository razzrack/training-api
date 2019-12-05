import React from 'react';
import {
  Button, Card, CardImg, CardText,
  CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
import { Link, Redirect } from "react-router-dom";
import user from '../img/user.png';

export default class TrainerCard extends React.Component {
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
    // let { emp_name, emp_department, emp_division } = this.props.pela;
    return (
    <Row>
        <Col>
            <Card className="text-center">
            <CardImg top width="100%" src={user} alt="Card image cap" />
                <Card body className="text-center">
                    <Row>
                      <Col>
                        <CardTitle>
                        <Link onClick={this.toggle}>Nama</Link></CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <CardSubtitle>Dept</CardSubtitle>
                      </Col>
                      <Col>
                      <CardSubtitle>Div</CardSubtitle>
                      </Col>
                    </Row>
                </Card>
                <Card body className="text-center">
                    <CardTitle>Ajukan Proposal Dengan Klik Dibawah ini</CardTitle>
                    <Link to="/proposals">Ajukan</Link>
                </Card>
            </Card>
        </Col>
    </Row>
    );
  }
};