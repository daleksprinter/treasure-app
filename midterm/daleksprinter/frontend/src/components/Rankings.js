import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper';

const Ranking = (props) => {
    return (
        <Paper className = 'ranking'  >
            <p>RankingID - {props.data.id}</p>
            <p>RankingTitle - {props.data.name}</p>
            <p>Created By - {props.data.created_user}</p>
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
        const url = "http://localhost:8080/rankings";
        fetch(url)
        .then((res) => {
            res.text().then((data) => {
                this.setState({
                    rankings: JSON.parse(data)
                })
            })
        })
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