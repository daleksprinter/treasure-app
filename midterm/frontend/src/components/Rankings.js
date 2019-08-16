import React, {Component} from 'react'

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
                console.log(data)
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
                    return <div>{data.name}</div>;
                })}
            </div>
        )
    }


}

export default Rankings