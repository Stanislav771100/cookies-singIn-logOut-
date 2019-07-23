// import './Profile.css'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

class Logout extends Component {
    state = {
        doRedirect: false,

      }

      redirectToLog = () => {
        cookies.remove('login')
        cookies.remove('password')
        this.setState({
          doRedirect: true
      })
      

    }
    
  render () {
    if(this.state.doRedirect){
        return <Redirect to='/' />
      }
    
    return (
      <div className='block_user'>

        <button onClick={this.redirectToLog}>LogOut</button>
      </div>
    )
  }
}

export default Logout
