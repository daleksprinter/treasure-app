import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper';
import './rankings.css';

const Ranking = (props) => {
    return (
        <Paper className = 'ranking'  >
            <img src = {props.data.thumbnail_url} className ="ranking_thumbnail"></img>
            <p>RankingTitle - {props.data.name}</p>
            <p>Created By - </p>
        </Paper>
    )
}


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
            res.text().then((data) => {
                this.setState({
                    rankings: JSON.parse(data)
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