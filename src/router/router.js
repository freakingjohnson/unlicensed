import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/home/Home'
import Results from '../components/results/Results';
import Profile from '../components/profile/Profile'
import Steps from '../components/createUser/Steps'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/results" component={Results} />
    <Route path="/:id/:name" component={Profile} />
    <Route path="/signupaspro" component={Steps} />
  </Switch>
)