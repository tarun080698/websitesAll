import React, { Component } from 'react'
import '../assets/css/admin.css'
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";

export default class LoginWrapper extends Component {
    render() {
        return (
            <div id='login-page'>
                {this.props.children}
            </div>
        )
    }
}
