import React from 'react';
import LoginContainer from './login-container/login-container';
import { loginIn } from '../../../actions/userActions';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import './login.scss';

const Login = (props) => {

    const { loginIn, loggedIn } = props;
    
    if(loggedIn === 'wait') return <span>"WAIT"</span>;
    if(loggedIn === true) return <Redirect to="/"/>
    
    return ( 
        <div className="login-page">
            <LoginContainer onLoginIn={loginIn} />
        </div>
     );
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.user.loggedIn
    }
}

export default withRouter(connect(mapStateToProps, { loginIn })(Login));