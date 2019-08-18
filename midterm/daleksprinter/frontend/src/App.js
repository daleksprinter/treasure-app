import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Login'
import Rankings from './components/Rankings'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import RankingDetail from "./components/RankingDetail"

import './App.css'


const Header = () => (
  <div>
    <AppBar position="static">
        <Toolbar >
          <Typography variant="h6">
            <Link href = "/rankings" color="inherit">TreasureRanking</Link>
          </Typography>
          <div className ='login_link'>
            <Typography variant="h6" >
              <Link href = "/login" color="inherit" >Login</Link>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
  </div>
)

const App = () => (
  <div>
    <Header />
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
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
