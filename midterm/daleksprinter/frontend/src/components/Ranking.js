import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper';
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
        return(
            <Paper className = "ranking">
                <div>RankingTitle : {this.props.data.name}</div>
                <div>Created_by : {this.state.user.name}</div>
                <img src = {this.props.data.thumbnail_url} className = "ranking_thumbnail"/>
            </Paper>
        )
    }
}

export default Ranking