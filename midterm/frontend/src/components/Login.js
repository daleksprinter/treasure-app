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
    }
    

    render(){ 
        return(
            <div>
                <TextField
                    id="user_id"
                    label="GitHub ID"
                    name="user_id"
                    margin="normal"
                /><br />
                
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                /><br />
               
               <Button variant="contained" color="primary" >
                    Login
                </Button>
            </div>
        )
    }

}

export default Login
