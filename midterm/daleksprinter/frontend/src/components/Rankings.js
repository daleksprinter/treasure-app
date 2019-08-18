import React, {Component} from 'react'
import './rankings.css';
import Ranking from './Ranking'


class Rankings extends Component{

    constructor(){
        super();
        this.state = {
            rankings: []
        }
    }

    componentDidMount(){
        const rankings_url = "http://localhost:8080/rankings";
        fetch(rankings_url)
        .then((res) => {
            res.json().then((data) => {
                this.setState({
                    rankings: data
                })
            })
        });
    }

    render(){
        return(
            <div>
                {this.state.rankings.map(data => {
                    return <Ranking data = {data} />
                })}
            </div>
        )
    }
}

export default Rankings