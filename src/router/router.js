import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/home/Home'
import Steps from '../components/createUser/Steps'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signupaspro" component={Steps} />
  </Switch>
)