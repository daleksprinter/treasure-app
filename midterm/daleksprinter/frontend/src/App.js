import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import Rankings from './components/Rankings'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import RankingDetail from "./components/RankingDetail"

import './App.css'
const Header = () => (
  <div>
    <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            MyApp
          </Typography>
          <Button color="inherit"　align = 'right'>Login</Button>
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
