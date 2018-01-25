import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Results, editProfile, Profile, Steps, proLogin, nonProSignup, nonProLogin, Privacy } from '../Loadable/Loadable'


export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/results" component={Results} />
    <Route path="/:id/:name/edit" component={editProfile} />
    <Route path="/:id/:name" component={Profile} />
    <Route path="/signupaspro" component={Steps} />
    <Route path="/loginaspro" component={proLogin} />
    <Route path="/signup" component={nonProSignup} />
    <Route path="/loginnonpro" component={nonProLogin} />
    <Route path="/privacy-policy" component={Privacy} />
  </Switch>
)
