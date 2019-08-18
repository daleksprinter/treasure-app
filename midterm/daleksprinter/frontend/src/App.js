import React ,{Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Login'
import Rankings from './components/Rankings'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import RankingDetail from "./components/RankingDetail"

import './App.css'


class Header extends Component{
    constructor(){
      super();
      this.state = {
        isloggedin:false
      }
    }

    componentDidMount(){
      const url = "http://localhost:8080/isloggedin";
      fetch(url)
      .then((res) => {
        res.json().then((data) => {
          this.setState({
            isloggedin: data.isloggedin
          })
          console.log(this.state.isloggedin)
        })
      })
    }

    render(){
      const op = this.state.isloggedin ? "logout" : "login"
      return(
        <AppBar position="static">
        <Toolbar >
          <Typography variant="h6">
            <Link href = "/rankings" color="inherit">TreasureRanking</Link>
          </Typography>
          <div className ='login_link'>
            <Typography variant="h6" >
              <Link href = {"/" + op} color="inherit" >{op}</Link>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      )
    }


}

class Logout extends Component{
  constructor(){
    super();
  }

  componentDidMount(){
    const logout = "http://localhost:8080/logout"
    fetch(logout).then(window.location.href = "/login")
  }

  render(){
    return(<div></div>)
  }
}

const App = () => (
  <div>
    <Header />
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path="/logout" component = {Logout} />
        <Route exact path='/rankings' component = {Rankings} />
        <Route path='/rankings/:id' component = {RankingDetail} />
      </div>
    </BrowserRouter>
  </div>
)

const Home = () => (
  <div>hello world</div>
)


export default App
