import React, { Component } from 'react'
import '../../assets/css/login.css'
import "antd/dist/antd.css";

export default class LoginWrapper extends Component {
    render() {
        return (
            <div id='login-page'>
                {this.props.children}
            </div>
        )
    }
}
