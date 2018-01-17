import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/home/Home'
<<<<<<< HEAD
// import Results from '../components/results/Results';
=======
import Results from '../components/results/ReduxResults';
>>>>>>> master
import Profile from '../components/profile/Profile'
import Steps from '../components/createUser/Steps'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
<<<<<<< HEAD
    {/* <Route path="/results" component={Results} /> */}
=======
    <Route path="/results" component={Results} />
>>>>>>> master
    <Route path="/profile" component={Profile} />
    <Route path="/signupaspro" component={Steps} />
  </Switch>
)