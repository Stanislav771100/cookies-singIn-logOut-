import React from 'react'
import Signin from './components/Signin'
import Logout from './components/Logout'
import { BrowserRouter, Route } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route path='/' exact component={Signin} />
        <Route path='/Logout' component={Logout} />
      </div>
    </BrowserRouter>
  )
}

export default App
