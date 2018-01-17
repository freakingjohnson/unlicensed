import React from 'react';
import router from './router/router'
import Navbar from './components/home/Navbar'

const App = () => (
  <div>
    <Navbar />
    { router }
  </div>
)

export default App
