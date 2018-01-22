import React from 'react'
import Social from './social'
import Copyright from './copyright'
import { Link } from 'react-router-dom'

const Footer = () => (
  <div>
    <Copyright />
    <Social />
    <Link to="/privacy-policy">Privacy Policy</Link>
  </div>
)

export default Footer