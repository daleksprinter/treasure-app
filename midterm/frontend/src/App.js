import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import Rankings from './components/Rankings'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/rankings' component = {Rankings} />
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div>hello world</div>
)


export default App
