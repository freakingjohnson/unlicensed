import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/home/Home'
import Results from '../components/results/Results';
import Profile from '../components/profile/Profile'
import Steps from '../components/createUser/Steps'
import nonProLogin from '../components/login/nonProLogin';
import nonProSignup from '../components/login/nonProSignup';
import proLogin from '../components/login/proLogin'
import Privacy from '../components/footer/privacy'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/results" component={Results} />
    <Route path="/:id/:name" component={Profile} />
    <Route path="/signupaspro" component={Steps} />
    <Route path="/loginaspro" component={proLogin} />
    <Route path="/signup" component={nonProSignup} />
    <Route path="/loginnonpro" component={nonProLogin} />
    <Route path="/privacy-policy" component={Privacy} />
  </Switch>
)