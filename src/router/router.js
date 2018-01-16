import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/home/Home'
import Results from '../components/results/ReduxResults';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/results" component={Results} />
  </Switch>
)