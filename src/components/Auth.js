import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { getJwt } from '../helpers/jwt';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined,
            employee: undefined
        };
    }

    componentDidMount() {
        this.getUser();
    }

    getUser() {
        const jwt = getJwt();
        if(!jwt) {
            this.setState({
                user: null
            });
            return;
        }
        
        axios.get('http://localhost:3001/api/users',
        { headers: { Authorization: getJwt() } })
        .then(res => {
            this.setState({
                user: res.data
            })
        });
    }

    render() {
        const { user } = this.state;
        if(user === undefined) {
            return (
                <div>
                    Loading...
                </div>
            );
        }

        if(user === null){
            this.props.history.push('/');
        }

        return this.props.children;
    }
}

export default withRouter(Auth);