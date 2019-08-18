import React, {Component} from 'react'

import './rankings.css';


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
                            <div>{element.candidate}</div>
                            <div>{element.count}</div>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default RankingDetail