import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            username:"",
            password:""
        }
        this.changeUserId = this.changeUserId.bind(this)
    }
    
    changeUserId = (e) => {
        this.setState({
            username:e.target.value
        })
    }

    changePassword = (e) => {
        this.setState({
            password:e.target.value
        })
    }

    login = (e) => {
        const url = "http://localhost:8080/login";
        const data = {
            "user_id":this.state.username,
            "password":this.state.password
        }
        const method = "POST"
        fetch(url, {
            method:method,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            console.log(res)
        })
    }

    render(){ 
        return(
            <div>
                <TextField
                    id="user_id"
                    label="GitHub ID"
                    name="user_id"
                    margin="normal"
                    onChange = {this.changeUserId}
                /><br />
                
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    onChange = {this.changePassword}
                /><br />
               
               <Button variant="contained" color="primary" onClick = {this.login}>
                    Login
                </Button>
            </div>
        )
    }

}

export default Login
