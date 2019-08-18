import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import lifecycle from 'react-pure-lifecycle';
import { Menu } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';


class Vote extends React.Component {
    constructor(){
        super();
        this.state = {
            users:{},
            selected:""
        }
    }
  
    handleChange(value) {
      this.setState({ selected: value });
    }
  
    componentDidMount(){
        const url = "http://localhost:8080/users";
        fetch(url)
        .then((res) => {
            res.json().then((data) => {
                this.setState({
                    users: data
                })
            })
        })
    }
  
    render() {
      const { classes } = this.props;
      const { selected, hasError } = this.state;
  
      return (
        <form autoComplete="off">
          <FormControl  error={hasError}>
            <InputLabel htmlFor="name">User</InputLabel>
            <Select
            　className = 'select'
              name="name"
              value={selected}
              onChange={event => this.handleChange(event.target.value)}
              input={<Input id="name" />}
            >

{Object.keys(this.state.users).map((key) => {
                    return (
                        <MenuItem 
                        value = {this.state.users[key].name}>
                                <div>{this.state.users[key].name}</div>
                        </MenuItem>)
                })}

            </Select>
            {hasError && <FormHelperText>This is required!</FormHelperText>}
          </FormControl>
        </form>
      );
    }
  }

  export default Vote;