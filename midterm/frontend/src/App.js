import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Login from './components/Login'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div>hello world</div>
)


export default App
