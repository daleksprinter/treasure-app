import React, {Component} from 'react'
import Vote from "./Vote"


import './rankings.css';

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
        return(
            <div>
                <img src = {github_icon_url} className = 'github_thumbnail'/>
                <div>{this.state.user.name}</div>
            </div>
        )
    }
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

        return(
            <div>
                {this.state.votes.map((element) => {
                    return (
                        <div>
                            <UserVeiw candidate = {element.candidate} />
                            <div>数 - {element.count}</div>
                        </div>
                    )
                })}
                <Vote />
            </div>
        )
    }
}

export default RankingDetail