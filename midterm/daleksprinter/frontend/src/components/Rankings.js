import React, {Component} from 'react'
import './rankings.css';
import Ranking from './Ranking'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Rankings extends Component{

    constructor(){
        super();
        this.state = {
            rankings: [],
            title:""
        }
        this.changeTitle = this.changeTitle.bind(this)
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

    changeTitle(e){
        this.setState({
            title : e.target.value
        })
    }

    createRanking = () => {
        const url = "http://localhost:8080/rankings"
        const method = "POST"
        const data = {
            "name":this.state.title,
        }
        const headers = {
            "Content-Type": "application/json; charset=utf-8",
        }
        fetch(url, {
            method:method,
            headers: headers,
            body: JSON.stringify(data),
        }).then((res) => {
            res.json().then((d) => {
                this.setState({
                    rankings: this.state.rankings.concat(d),
                    title:""
                })
            })
        })  
    }

    render(){
        return(
            <div>
                <div className = 'textfield'>
                    <div className = "create_ranking_textfield">
                        <TextField 
                            placeholder = "Ranking Title"
                            onChange = {this.changeTitle}
                        />
                        <Button variant="contained" color="primary" onClick = {this.createRanking} className = "create_ranking_button">
                            Create
                        </Button>
                    </div>
                </div>
                <div className = "ranking_list">
                    {this.state.rankings.map(data => {
                        return <Ranking data = {data} />
                    })}
                </div>
            </div>
        )
    }
}

export default Rankings