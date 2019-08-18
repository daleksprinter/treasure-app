import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './rankings.css';


class Ranking extends Component{

    constructor(){
        super();
        this.state = {
            user:{}
        }
    }

    componentDidMount(){
        const user_id = this.props.data.created_user
        const url = "http://localhost:8080/users/" + String(user_id)
        fetch(url)
        .then((res) => {
            res.json().then((data) =>  {
                this.setState({
                    user: data
                })
            })
        })
    }

    render(){
        const link = "/rankings/" + String(this.props.data.id)
        return(
            <div  className = "ranking">
            <Link to = {link}>
                <Paper className = "ranking_view">
                    <img src = {this.props.data.thumbnail_url} className = "ranking_thumbnail"/>
                    <h3>Ranking : {this.props.data.name}</h3>
                    <div>Created_by : {this.state.user.name}</div>
                </Paper>
            </Link>
            </div>
        )
    }
}

export default Ranking