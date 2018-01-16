import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/home/Home'
<<<<<<< HEAD
import Results from '../components/results/ReduxResults';
=======
import Profile from '../components/profile/Profile'
import Steps from '../components/createUser/Steps'
>>>>>>> master

export default (
  <Switch>
    <Route exact path="/" component={Home} />
<<<<<<< HEAD
    <Route path="/results" component={Results} />
=======
    <Route path="/profile" component={Profile} />
    <Route path="/signupaspro" component={Steps} />
>>>>>>> master
  </Switch>
)