import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';


class Vote extends React.Component {
    constructor(){
        super();
        this.state = {
            users:{},
            selected:0
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

    vote = () => {
        const url = "http://localhost:8080/votes"
        const method = "POST"
        const data = {
            "ranking":this.props.ranking.id,
            "candidate":this.state.selected
        }
        const headers = {
            "Content-Type": "application/json; charset=utf-8",
        }
        fetch(url, {
            method:method,
            headers: headers,
            body: JSON.stringify(data),
        }).then((res) => {
            console.log("vote succeeded");
        })
    }
  
    render() {
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
                    <MenuItem value = {this.state.users[key].id}>
                        <img src = {"https://github.com/" + this.state.users[key].user_id + ".png"} className = "select_thumbnail"/>
                        <div>{this.state.users[key].name}</div>
                    </MenuItem>)
            })}

            </Select>
            {hasError && <FormHelperText>This is required!</FormHelperText>}
          </FormControl>

          <Button variant="contained" color="primary" onClick = {this.vote}>Vote</Button>
        </form>
      );
    }
  }

  export default Vote;