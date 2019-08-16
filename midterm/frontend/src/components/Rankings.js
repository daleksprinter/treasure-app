import React, {Component} from 'react'

const Ranking = (props) => {
    return (
        <div>
            <div>{props.data.id}</div>
            <div>{props.data.name}</div>
            <div>{props.data.created_user}</div>
        </div>
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