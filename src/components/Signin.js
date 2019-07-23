// import './Profile.css'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class Singin extends Component {
  state = {
    doRedirect: false,
    login : '',
    password : ''
  }
  
  componentDidMount() {
    var login = cookies.get('login')
    var password = cookies.get('password')
    if (login && password){
      this.setState({doRedirect:true})
  } 
}
  redirectToLog = () => {
      let { login, password } = this.state
      cookies.set('login', login)
      cookies.set('password', password) 
      
      this.setState({
        doRedirect: true
    })

  
  }

     
  
  
  render () {
    let { login, password } = this.state
    if(this.state.doRedirect){
      return <Redirect to='/Logout' />
    }
    return (
      <div className='block_user'>
        <input value={login} onChange={(e) => { this.setState({ login: e.target.value }) }} />
        <input value={password} onChange={(e) => { this.setState({ password: e.target.value }) }} />
        <button onClick={this.redirectToLog}>Join</button>
        
      </div>
    )
    }
}

export default Singin
