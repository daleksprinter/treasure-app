import React, {Component} from 'react'
import Vote from "./Vote"


import './rankings.css';
import { Paper } from '@material-ui/core';

class UserVeiw extends Component{
    constructor(){
        super();
        this.state = {
            user: {}
        }
    }

    componentDidMount(){
        const user_id = this.props.candidate;
        const url = "http://localhost:8080/users/" + String(user_id)
        fetch(url)
        .then((res) => {
            res.json().then((data) => {
                this.setState({
                    user: data
                })
            })
        })
    }

    render(){
        const github_icon_url = "https://github.com/" + this.state.user.user_id + ".png";
        const crowns = ["https://treasure-ranking.s3.us-east-2.amazonaws.com/treasure-ranking/istockphoto-637958090-1024x1024.jpg",
                        "https://treasure-ranking.s3.us-east-2.amazonaws.com/treasure-ranking/istockphoto-637958090-1024x1024+(1).jpg",
                        "https://treasure-ranking.s3.us-east-2.amazonaws.com/treasure-ranking/istockphoto-637958090-1024x1024+(2).jpg"]
        return(
            <div>
                <img src = {crowns[this.props.rank - 1]} className = 'rank_crown'/>
                <img src = {github_icon_url} className = 'github_thumbnail'/>
                <div className = 'rank_det'>
                    <div>{this.state.user.name}</div>
                    <p>{this.props.num} Voted</p>
                </div>
            </div>
        )
    }
}

const RankingView = (props) => {
    return (
        <div>
            <img src = {props.ranking.thumbnail_url} class = "ranking_detail_thumbnail"/>
            <h3>{props.ranking.name}</h3>
        </div>
    )
}


class RankingDetail extends Component{

    constructor(){
        super();
        this.state = {
            ranking:{},
            votes:[],
        }
    }

    componentDidMount(){
        const {params} = this.props.match

        const ranking_url = "http://localhost:8080/rankings/" + params.id
        fetch(ranking_url)
        .then((res) => {
            res.json().then((data) => {
                this.setState({
                    ranking: data
                })
            })
        })

        const vote_url = "http://localhost:8080/votes/" + params.id
        fetch(vote_url)
        .then((res) => {
            res.json().then((data) => {
                this.setState({
                    votes: data
                })
            })
        })
    }

    render(){
        let count = 0
        return(
            <Paper className = "ranking_detail">
                <RankingView ranking = {this.state.ranking}/>
                {this.state.votes.map((element) => {
                    count += 1;
                    return (  
                        <UserVeiw candidate = {element.candidate} num = {element.count} rank = {count}/>
                    )
                })}
                <Vote ranking = {this.state.ranking}/>
            </Paper>
        )
    }
}

export default RankingDetail